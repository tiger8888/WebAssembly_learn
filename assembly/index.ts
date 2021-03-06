// The entry file of your WebAssembly module.
// javascript 并不支持 64位 数据类型，因此在 assemblyscript 中使用 64 位数据类型并没有任何问题，但是在 javascript 中调用时则会报错。
NativeMath.seedRandom(Date.now());
const I32Size = sizeof<i32>();

export const INT32ARRAY_ID = idof<Int32Array>(); //获得复杂类型的内存分配相关的唯一ID

//强制类型转换
export function i32Tof32(a: i32): f32 {
  return <f32>a;
}

//for循环
export function forLoop(times: i32): i32 {
  let len = 4;
  let no = 0;
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < times; j++) {
      for (let z = 0; z < len; z++) {
        no = i * times * len + j * len;
      }
    }
  }
  return no;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function minus(a: i32, b: i32): i32 {
  return a - b;
}

export function hello(): string {
  return "hello webassembly";
}

export function hi(name: string): string {
  return "hi " + name;
}

//获取数组长度
export function getArrLen(arr: i32[]): i32 {
  //直接使用 length 时会有问题，目前并不清楚确切原因，怀疑是 AssemblyScript bug，可以改为使用字节数除以类型大小的方式间接获取
  //return arr.length;
  return arr.byteLength / I32Size;
}

/**
 * 冒泡排序
 * 从 JS 中传入的数组获取其长度时并不能直接使用 length 属性，而应该把数组长度一起当成参数传入。
 */
export function bubbleSort(arr: i32[], len: i32): i32[] {
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

//截取数组
export function sliceArray(arr: Array<i32>, start: i32, end: i32): i32[] {
  return arr.slice(start, end);
}

/**
 * 要想在 assemblyscript 中使用 javascript 的 Math 需要在编译时指定 --use Math=JSMath；
 * 否则默认是 NativeMath 而 NativeMath 的方法 和 Math 有一些小的差别，比如：NativeMath.random 获取随机数之前需要先执行 NativeMath.seedRandom。
 */
export function random(): f32 {
  return <f32>NativeMath.random();
}

export function dateNow(): i32 {
  return <i32>Date.now();
}

//计算斐波那契数列
export function fib(n: i32): i32 {
  if (n < 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

//斐波那契数列 非递归实现
export function fib2(n: i32): i32 {
  var a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    let t = a + b;
    a = b;
    b = t;
  }
  return b;
}

//直接读取内存
export const fibLen = 10;
export function fib3(): void {
  for (let n = 0; n <= fibLen; n++) {
    if (n === 0 || n === 1) {
      store<i32>(n * I32Size, n);
    } else {
      store<i32>(
        n * I32Size,
        load<i32>((n - 1) * I32Size) + load<i32>((n - 2) * I32Size)
      );
    }
  }
}
