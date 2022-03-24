type Callback<T> = (elem:T, index?: number, arr?: Array<T>) => boolean;

function myFilter<T>(arr: Array<T>, callback: Callback<T>): Array<T> {
  const res = new Array<T>();
  for (let index =0; index < arr.length; index += 1) {
    if(callback(arr[index], index, arr)) {
      res.push(arr[index])
    }
  }
  return res;
}

const array: Array<number> = [1, 2, 3, 4, 5, 6];
function ehPar(num: number): boolean{
  return num % 2 === 0;
}

const newArray = myFilter(array, ehPar);

console.log(newArray);