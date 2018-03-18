//A Promise in short:
/*"Imagine you are a kid. 
Your mom promises you that she'll get you
a new phone next week."*/

/**
 * 
 * That is a promise. A promise has 3 states. They are:
 * Promise is pending: You don't know if you will get that phone until next week.
 * Promise is resolved: Your mom really buy you a brand new phone.
 * Promise is rejected: You don't get a new phone because your mom is not happy. 
 */

var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
/**
 * We have a function call askMom. 
 * In this function, we will consume our promise willIGetNewPhone.
 * We want to take some action once the promise is resolved or rejected,
 *  we use .then and .catch to handle our action.
 * In our example, we have function(fulfilled) { ... } in .then. 
 * What is the value of fulfilled? The fulfilled value is exactly 
 * the value you pass in your promise resolve(your_success_value).
 * Therefore, it will be phone in our case.
 * We have function(error){ ... } in .catch. 
 * What is the value of error? 
 * As you can guess, the error value is exactly 
 * the value you pass in your promise reject(your_fail_value). 
 * Therefore, it will be reason in our case.
 */