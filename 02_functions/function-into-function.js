function writeMyName (name) {
    console.log(`My name is ${name}!`);
}

function verifyAge(age, name) {
  if (typeof age !== 'number' || age < 0) {
    throw new Error('Invalid age provided');
  }
  else if (age >= 18) { 
    writeMyName(name);
    console.log("I'm an adult.");
  }
  else {
    writeMyName(name);
    console.log("I'm a minor.");
  }
}

verifyAge(20, "anniekōi");
verifyAge(15, "akarui");