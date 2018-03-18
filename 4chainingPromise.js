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
/**
 * this function below, showoff create a new promise to be
 * resolved once phone object is obtained.
 * compare it with willGetNewPhone function above
 * 
 *  */
var showoff=function(phone){
    console.log("phone",phone);
    return new Promise(
        function(resolve,reject){
            var message="hey guys,I got a "+phone.color+" "+phone.brand+" phone";
            resolve(message);
    })
}


var askMom=function(){
    willGetNewPhone
    .then(showoff)          //we have chained the function here
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(err){
        console.log(err.message);       //err.message can be called if a new error is defined (line :10)
    });
};

askMom();