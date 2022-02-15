const sorter = (arr) =>{
  arr.sort((a,b) => {
    return a - b;
  });
  return arr;
};

const timer1 = function() {

  let inputArr = process.argv.splice(2);
  let delay = 0;

  let sortedArr = sorter(inputArr);

  for (const time of sortedArr) {
    if (time * 1 < 0 || isNaN(time * 1)) {
      //
    } else {
      delay = time * 1000;

      setTimeout(() => {
        process.stdout.write('\x07');
      },delay);
    }
  }
};

timer1();
//array sorter

