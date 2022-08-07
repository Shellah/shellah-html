// console.log("Uber Profile")

// let username ="Shellah Gwenzi";
// let age = 42;
// let isAdult =true;
// console.log(typeof username);

// console.log(username,age);

const uberRide = 200;
const driverCommission = 70 / 100;
const nameOfDriver ="Shellah";
const uberDriverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDriverEarning;

// const output = 
// "from a ride costing R" + 
// uberRide +
// ",\n" +
// nameOfDriver  +
// " earns R" +
//  parseInt(uberDriverEarning) +
// " with a '70%'commission,\nwhile Uber earns R " +
//  uberEarning +
//   " with a '30%' commission";

//   \n is for new sentence
// template literals the way to go 
const output = `from a ride costing R${uberRide},
${nameOfDriver} earns R${uberDriverEarning} with a "70%" commission,
  while Uber earns R${uberEarning} with a "30%" commission`;

console.log(output);
