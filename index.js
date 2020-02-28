function wakeDog(dogName, dogBreed){
<<<<<<< HEAD
  let string = `Wake ${dogName} the ${dogBreed}`;
=======
  let string = `Wake ${dogName} the ${}`;
>>>>>>> e87170b394eee0ae3b63da7c1d05920408782c91
  console.log(string);
  return string; 
}

<<<<<<< HEAD
function leashDog(dogName, dogBreed){
  let str = `Leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str; 
}

function walkToPark(dogName, dogBreed){
  let str = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str; 
}

function throwFrisbee(dogName, dogBreed){
  let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str; 
}

function walkHome(dogName, dogBreed){
  let str = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str; 
}

function unleashDog(dogName, dogBreed){
  let str = `Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str; 
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]; 

function exerciseDog(dogName, dogBreed){
 routine.map(func => func(dogName, dogBreed)); 
=======
function leash(dogName, dogBreed){
  let string = `Leash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string; 
}

function walk(dogName, dogBreed){
  let string = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string; 
}

function frisbee(dogName, dogBreed){
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(string);
  return string; 
}

function walkHome(dogName, dogBreed){
  let string = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(string);
  return string; 
}

function unleash(dogName, dogBreed){
  let string = `Unleash ${dogName} the ${dogBreed}`;
  console.log(string);
  return string; 
}

let routine = [wakeDog, walk, frisbee, walkHome, unleash]; 

function exerciseDog(dogName, dogBreed){
  routine.forEach(func => {
    let resultsArr = [];  
    resultsArr.push(func(dogName, dogBreed)); 
    return resultsArr; 
  }); 
>>>>>>> e87170b394eee0ae3b63da7c1d05920408782c91
}