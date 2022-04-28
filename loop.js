function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${howMany(musicTypes)} option(s).`);
  });


  // JavaScript function
  function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);