const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = (profileDataArr) => {
    // this...
    // for (let i = 0; i < profileDataArr.length; i++){
    // console.log(profileDataArr[i]);
    // }

    console.log("=======================")

    //is the same as this 
    profileDataArr.forEach((profileItem) =>{
        console.log(profileItem);
    });
};

printProfileData(profileDataArgs)

// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);
// console.log(sum);