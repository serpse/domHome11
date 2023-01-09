
//                        1


function element(arr) {
  let result = [];

  for (let str of arr) {
      if (!result.includes(str)) {
          result.push(str);
      }
  }

  return result;
}

let strings = [1, 2, 1, 3, 4, 4, 5];

console.log(element(strings));


//                       2

function massiv(a, b) {
  if (a instanceof Array && b instanceof Array) {
      if (a.length !== b.length) {
          return false;
      }

      for (let i = 0; i < a.length; i++) {
          if (!massiv(a[i], b[i])) {
              return false;
          }
      }

      return true;
  }

  return a === b;
}

const nulloy = [1, 2, 3, 4, 5];
const goll = [1, 2, 3, 4, 6];

let res = isEqual(nulloy, goll);
console.log(res);
console.log( );




 //                  3

/*
//const tan = ('kolja','ura','jenja','u');


const tur = 'kolja ura jenja u';
console.log(tur.startsWith('kolja'));
 
console.log(tur.startsWith('kolja'));        
console.log(tur.startsWith('ura'));     
console.log(tur.startsWith('u'));  
console.log(tur.startsWith('jenja'));  

*/


const imja = ["kolja", "ura", "jenja", "alex"];
let resArr = [];

function litBuc(arr, symb) {
    for (let key in arr) {
        if (arr[key].startsWith(symb)) {
            resArr.push(arr[key]);
        }
    }
    return (resArr);
}

console.log(litBuc(imja, 'a'));
console.log( );





//                      4


const predlog = ["Google", "MAC Google", "JS Windows MAC", "Home HTML JS"];
let preSet = [];

function settInt(arrE, jav) {
    for (let key1 in arrE) {
        if (arrE[key1].includes(jav)) {
          preSet.push(arrE[key1]);
        }
    }
    return (preSet);
}

console.log(settInt(predlog, 'Google'));
console.log( );