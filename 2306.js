// Section 1 ================================================================

// let a = "some string";
// let b = "other string";
// a += b;
// b = a.slice(0,-b.length)
// a = a.slice(b.length)
// console.log(a,b);

// Section 2 ==================================================================

// exes = [["X", "o", "x", "X", "x"],
//  ["x", "X", "o", "o", "X"],
//  ["o", "x", "X", "x", "o"],
//  ["X", "o", "X", "o", "x"],
//  ["x", "x", "o", "X", "X"]]
// let counter = 0;
// const location = [[],[],[],[],[]];
//  for(let i = 0; i < 5; i++)
//  {
//      for(let j = 0; j < 5; j++)
//      {
//         if(exes[i][j]==="X")
//         {
//             counter++
//             location[i].push(j);
//         }
//      }
//  }
//  console.log(`There are ${counter} exes, at locations:` ,location);

// Section 3 =============================================================

// let family = {
//   parents: {},
//   children: [
//     { name: "Ali" },
//     { name: "Lea" },
//     { name: "Mona" }
//   ]
// };
// console.log(family.children[2].name);

// let allNames = family.children.map(child => child.name);
// console.log(allNames.join(", "));

// Section 4 ============================================================

// const arr = [1, 2, 3, 4, 5];
// const n = arr.length;
// for (let i = 0; i < n / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[n - 1 - i];
//   arr[n - 1 - i] = temp;
// }
// console.log(arr); 

// Section 5 ============================================================
// 
// Nullהוספתי תנאים ידנית ל[] ןל 

// const arr = [1, "baruch", true , {6: 5}, [5], null];
// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];
//   let Type;
//   if (Array.isArray(value)) {
//     Type = "array";
//   } else if (value === null) {
//     Type = "null";
//   } else {
//     Type = typeof value;
//   }
//   console.log(`index: ${i}.  value: ${value}. type: ${Type}.`);
// }

