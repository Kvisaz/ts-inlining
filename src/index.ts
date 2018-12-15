const max = 1000000000;
const thousand = 1000;
const fn = (x : number, y : number) => x+y;
console.log(`start `);
let t1 = Date.now();
let sum = 0;
for(let i=0;i<max;i++){
    sum = fn(sum, i);
}
console.log(`end. time ${(Date.now()-t1)/thousand} seconds`);