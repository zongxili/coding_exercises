const keysMatch = function(obj1, obj2) {
  const obj1KeyArr = Object.keys(obj1);
  obj1KeyArr.map(key => {
    if ( obj2[key] !== obj1[key]) {
      console.log("diff is ", obj2[key]);
      return false;
    }
  });
  console.log("true here");
  return true;
};

const obj1 = {
  1: 2,
  2: 2,
  3: 3
}

const obj2 = {
  1: 1,
  2: 2,
  3: 3
}

const obj3 = {
  1: 1,
  2: 2,
  3: 33
}

console.log(keysMatch(obj1, obj2));
console.log(keysMatch(obj1, obj3));