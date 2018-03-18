function readJson(filename,callback){
    console.log("here",filename);
    fs.readFile('filename.txt','utf8',function(err,res){
        if(err){
            console.log("error",err)
            return callback(err);
        }
        console.log("result",res);
        callback(null,JSON.parse(res));
    })
}