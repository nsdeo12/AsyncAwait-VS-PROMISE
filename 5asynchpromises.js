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
 * all the const are replaced with const. 
 * All the function(resolve, reject) has been
 *  simplified to (resolve, reject) =>. There 
 */