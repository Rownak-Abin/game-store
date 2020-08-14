var express 	= require('express');
var router 		= express.Router();
var transactionModel = require.main.require('./models/transaction');
var enduserModel = require.main.require("./models/enduser");
router.get('/', function(req, res){

	
	if(req.session.username!=null)
	{
		var results={
			propic:'',
			bio:'',
			username:''
		};
		enduserModel.getprofileinfo(req.session.username,(enduserResult)=>{

			if(enduserResult.length>0)
			{
				results.propic=enduserResult[0].propic;
				results.bio=enduserResult[0].bio;
				results.username=enduserResult[0].username;

				transactionModel.getAllTransaction(req.session.username,(result)=>{
					res.render("enduser/transaction",{result,results});
				});
			}
			else
			{
				res.redirect('/login');
			}
	


		});
		
		
	}
	else
	{
		res.redirect('/login');
	}
	

});

module.exports = router;