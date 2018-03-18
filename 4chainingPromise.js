//Let's say, you, the kid, promise your friend that you will show them the new phone when your mom buy you one.

var isMomHappy=true;
var willGetNewPhone=new Promise(function(resolve,reject){
    if(isMomHappy){
        var phone={"brand":"Samsung","color":"black"};
        resolve(phone);
    }
    else{
        var reason=new Error("mom ain't happy");
        reject(reason);
    }
});
var showoff=function(phone){
    return new Promise(
        function(resolve,reject){
            var message="hey guys,I got a "+phone.color+" "+phone.brand+" phone";
            resolve(message);
    })
}
/**
 * alternatively the above function can be written with a 
 * single promise line as below(commented);
 */
// var showoff=function(phone){
//     var message="hey guys,I got a "+phone.color+" "+phone.brand+" phone";
//     return Promise.resolve(message);
// }

var askMom=function(){
    willGetNewPhone
    .then(showoff)
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(err){
        console.log(err.message);       //err.message can be called if a new error is defined (line :10)
    });
};

askMom();