var mysql = require('mysql');

function getConnection(callback){

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'gamestore'
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	 
	});

	callback(connection);
}


module.exports = {
	getResults: function (sql, callback){
		getConnection(function(connection){
			connection.query(sql, (error, results)=>{

				if(error)
				{
					
					console.log(error.stack);
					callback([]);
				}
				else{
					
					
					callback(results);
				}
			});
			connection.end(function(err){
				if(err)
				{
					console.log("Database Error "+err);
				}
				
			});
		});
	},
	execute: function (sql, callback){

		getConnection(function(connection){
			connection.query(sql, function(error, results){
				
				if(error){
					callback(false);
				}else{
					callback(true);
				}
			});

			connection.end(function(err){
				if(err)
				{
					console.log("Database Error "+err);
				}
			});
		});
	}
}