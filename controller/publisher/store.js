var express 	= require('express');
var router 		= express.Router();


router.get('/', function(req, res){

	
	if(req.session.username!=null)
	{
		res.render('publisher/store');
	}
	else
	{
		res.redirect('/login');
	}

});

module.exports = router;