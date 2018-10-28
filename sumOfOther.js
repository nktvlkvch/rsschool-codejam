function make() {
  const arr = [];
  arguments.forEach((item) => {
    arr.push(item);
  });

  function myFun(arg) {
    if (typeof arg === 'function') return arr.reduce(arg);

    arguments.forEach = [].forEach;
    arguments.forEach((item) => {
      arr.push(item);
    });

    return myFun;
  }

  return myFun;
};