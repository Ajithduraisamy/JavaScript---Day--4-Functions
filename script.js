//1) Print odd Number in an array?

//a)Anonymous function:

var oddnum=function (arr){
var even=[];
var odd=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      even.push(arr[i]);
      }
      else{
        odd.push(arr[i]);
        }
    }
    return odd;
  }
  console.log(oddnum([1,2,3,4,5,6,7,8,9,10,11,12]));

//b)IIFE function:

(function (arr){
  var even=[];
  var odd=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      even.push(arr[i]);
      }
      else{
        odd.push(arr[i]);
        }
    }
    console.log(odd);
  })([1,2,3,4,5,6,7,8,9,10,11,12]);

  //c)Arrow functions:

var oddnum=(arr)=>{
    var even=[];
    var odd=[];
      for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
          even.push(arr[i]);
          }
          else{
            odd.push(arr[i]);
            }
        }
        return odd;
      }
      console.log(oddnum([1,2,3,4,5,6,7,8,9,10,11,12]));

//2) Convert all the strings to title caps in a string array?

//a)Anonymous function:

var title=function(str){
  str=str.toLowerCase().split(" ")
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
  return str.join(" ");
}
console.log(title("GUVI GEEKS FOR PRACTICE"));

//b)IIFE function:

(function(str){
  str=str.toLowerCase().split(" ")
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
  console.log(str.join(" "));
})("GUVI GEEKS FOR PRACTICE");

//c)Arrow functions:

var title=(str)=>{
    str=str.toLowerCase().split(" ")
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
      }
    return str.join(" ");
  }
  console.log(title("GUVI GEEKS FOR PRACTICE"));

//3) Sum of all numbers in an array?

//a)Anonymous function:

var sum=function (arr){
var temp=0;
  for(var i=0;i<arr.length;i++){
        temp=temp+arr[i];
    }
    return temp;
  }
  console.log(sum([1,2,3,4,5,6,7,8,9,10,11,12]));

//b)IIFE function:

(function (arr){
var temp=0;
  for(var i=0;i<arr.length;i++){
        temp=temp+arr[i];
    }
    console.log(temp);
  })([1,2,3,4,5,6,7,8,9,10,11,12]);

  //c)Arrow functions:

var sum=(arr)=>{
    var temp=0;
      for(var i=0;i<arr.length;i++){
            temp=temp+arr[i];
        }
        return temp;
      }
      console.log(sum([1,2,3,4,5,6,7,8,9,10,11,12]));

//4) return all the prime numbers in an array;

//a)Anonymous function:

var array=[1,2,3,4,5,6,7,8,9,10,11,12];
var res=function isPrime(num) {
  for (let i = 2; i <num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(res));

//b)IIFE function:

(function (arr){
var isPrime=function (num) {
  if (num <= 1){    
  return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
var temp=[];
for(let i=0;i<arr.length;i++){
  if(isPrime(arr[i])){
    temp.push(arr[i]);
    }
  }
console.log(temp);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Arrow functions:

var array=[1,2,3,4,5,6,7,8,9,10,11,12];
var res=(num)=>{
  for (let i = 2; i <num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(res));

//5) Return all the palindromes in an array?

//a)Anonymous function:

let arr = ["my gym", "pen", "rotator","sign", "level", "cool", "step on no pets"];
let N = arr.length;
var PalindromicStrings=function(arr,N){
var isPalindrome=function(s){
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(PalindromicStrings(arr,N));

//b)IIFE function:

let arr = ["my gym", "pen", "rotator","sign", "level", "cool", "step on no pets"];
let N = arr.length;

(function (arr,N){
  function isPalindrome(s){
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
  }
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    console.log(ans);
})(arr,N);

//c)Arrow functions:

let arr = ["my gym", "pen", "rotator","sign", "level", "cool", "step on no pets"];
let N = arr.length;
var PalindromicStrings=(arr,N)=>
{
var isPalindrome=function(s){
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(PalindromicStrings(arr,N));

//6) Return median of two sorted arrays of the same size?

//a)Anonymous function:

var getmedian=function(arr1,arr2){
  var compare=(i,j)=> {return i-j;}
  var arr=[...arr1,...arr2];
  arr.sort(compare);
if(arr.length%2==0){
  return (arr[(arr.length/2)-1]+arr[arr.length/2])/2;
  }
//return (arr[Math.floor(arr.length/2)]);
return (arr.length/2);
}
var arr1=[18,22,45,50,12];
var arr2=[9,23,35,52,10];
console.log(getmedian(arr1,arr2));

//b)IIFE function:

var arr1=[18,22,45,50,12];
var arr2=[9,23,35,52,10];
(function(arr1,arr2){
  var temp=[];
  var compare=(i,j)=> {return i-j;}
  var arr=[...arr1,...arr2];
  arr.sort(compare);
if(arr.length%2==0){
  temp.push((arr[(arr.length/2)-1]+arr[arr.length/2])/2);
  }
console.log (parseFloat(temp));
})(arr1,arr2);

//7) Remove duplicates from an array?

//a)Anonymous function:

var removeDuplicates=function(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 3]));

//b)IIFE function:

(function(arr) {
    console.log([...new Set(arr)]);
})([1, 2, 3, 4, 1, 2, 3]);

//8) Rotate an array by k times?

//a)Anonymous function:

var res=function(arr,k){
  for(var i=0;i<k;i++){
    arr.unshift(arr.pop(i));
    }
    return arr;
}
console.log(res([1,2,3,4,5,6,7,8,9],4));

//b)IIFE function:

(function(arr,k){
  for(var i=0;i<k;i++){
    arr.unshift(arr.pop(i));
    }
    console.log(arr);
})([1,2,3,4,5,6,7,8,9],4);
