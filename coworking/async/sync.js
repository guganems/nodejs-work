const people = [{name: "Mari", age: 22}, {name: "Guga", age: 20}];

function getPersonSync(index) {
    sleep(5);
    return people[index];
}
function msleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
  }
function sleep(n) {
    msleep(n*1000);
}

// SYNC
let person1 = getPersonSync(0);
console.log(person1);

let person2 = getPersonSync(1);
console.log(person2);

console.log("some shitty code");