'use strict';

const number = process.argv[2] || 0;
let ans = 1;

for (let i = 1; i <= number; i++) {
  ans = ans * i 
}

console.log(ans);

