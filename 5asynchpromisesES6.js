/**
 * Anything that need to wait for promise to proceed,
 * you put that in .then.
 * With ES6 functions, we can further simplify the code
 * with fat arrow => and use const and let.
 */




const isMomHappy = true;
//define the promise
const willGetPhone = new Promise(
    (resolve, reject) => { //replacing function with fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('Mom aint happy');
            reject(reason);
        }

    });

const showOff = function (phone) {

    const message = "hey I got a new " + phone.color + " " + phone.brand + " phone";
    return Promise.resolve(message);    //missing new keyword before promise

}


//call the promise
const askMom = function () {
    willGetPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message));        //error should be in catch not in then


};
askMom();
/**
 * all the var are replaced with const. 
 * All the function(resolve, reject) has been
 *  simplified to (resolve, reject) =>. There 
 * 
 * -----------------------------------------
 *  const is often misinterpreted as being a “constant value”. 
 * Instead, in ES6 a const represents a constant reference to a value 
 * (the same is true in most languages, in fact).
 * 
 * -----------------------------------------
 * ES5 does not have const and let and node v0.12 does not have too
 * Run legacy nodes with the following
 * >>node --harmony /path/to/script
 * harmony is the original codename for ES6
 * 
 * -----------------------------------------
 * while using const and let run the code in strict mode using the following on the top
 * use strict
 */