//Normal javascript function
function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(function (users) { return users[0]; })
    .then(verifyUser)
    .then(function (user, verifiedToken) { return verifiedToken; })
    .catch(function (err) { log(err.stack); });
}


//Using fat arrow function to replace function
function getVerifiedToken(selector){
    return getUsers(selector)
    .then(users=>users[0])
    .then(verifyUser)
    .then((user,verifiedToken)=>verifiedToken)
    .catch(err=>log(err.stack));
}

//notice that return keyword is not used while using =>