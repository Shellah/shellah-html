// avoid direct comparisons where possible
// const user ="user-data";

// if (user != "") {
    // console.log("ALLOW INTO THE PLATFORM");
// }
// else{
    // console.log("NOT ALLOWED INTO THE PLATFORM");
// }
// ----------------------------------------------------------------------------------
// #2 use ===(strict equals operators)
// console.log("23" == 23);
// "23" its a trusy value => truthy
// 23 => truthy
//3=== help type check for us always use this one
// -------------------------------------------------------------------------------------------------------
// #3 convert to real bool values where needed
// console.log(Boolean(NaN) === Bolean(NaN));
// like this
// not like this
// console.log(NaN === NaN);