var db = require('./db');


module.exports ={
    
    insertTransanction:(username,gameid,price,callback)=>{
        var sql="insert into transaction values('','"+gameid+"','"+username+"','"+price+"')";
        console.log("trasaction query"+sql);
        db.execute(sql,null,(status)=>{

            callback(status);
        })
    },
    getAllTransaction:(username,callback)=>{
        var sql="select * from transaction where username='"+username+"'";
        db.getResults(sql,null,(result)=>{
            if(result.length>0)
            {
                callback(result);
            }
            else
            {
                callback([]);
            }

        });
    },
    getAllTransactionByGameId:(id,callback)=>{
            var sql = "select * from transaction where gameid ='"+id+"' ";
            db.getResults(sql,null,(result)=>{
                if(result.length>0)
                {
                    callback(result);
                }
                else
                {
                    callback([]);
                }
            });
    },
}