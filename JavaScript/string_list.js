// - Original list of strings

// - List of strings to be added

// - List of strings to be removed

// Return

// - List shall only contain unique values

// - List shall be ordered as follows

// --- Most character count to least character count

// --- In the event of a tie, reverse alphabetical

// Other Notes

// - You can use any programming language you like

// - The function you submit shall be runnable

// For example:

// Original List = ['one', 'two', 'three',]

// Add List = ['one', 'two', 'five', 'six]

// Delete List = ['two', 'five']

// Result List = ['three', 'six', 'one']*

const stringList = function (oriArr, addArr, remArr) {
  let ansArr = [];
  let originalArr = oriArr;
  const addedArr = addArr;
  const removedArr = remArr;

  for(i=0; i < addedArr.length; i++){
    if(originalArr.indexOf(addedArr[i]) === -1) {
      originalArr.push(addedArr[i]);
    }
  }

  for (let i = 0; i < originalArr.length; i++) {
    let flag = -1;
    for (let y = 0; y < removedArr.length; y++) {
      if (originalArr[i] === removedArr[y]) flag = 1;
    }
    if (flag !== 1) ansArr.push(originalArr[i]);
  }

  (ansArr.sort()).reverse();
  return ansArr;
};

console.log(stringList(['one', 'two', 'three'], ['one', 'two', 'five', 'six'], ['two', 'five']));