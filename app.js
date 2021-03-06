global.msgQueue = [];
const http = require('http');
var express 	= require('express');
//var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var registration  = require('./controller/registration');
var cart = require('./controller/enduser/cart');
var endhome = require('./controller/enduser/home');
var endstore = require('./controller/enduser/store');
var endlibrary=require('./controller/enduser/library');
var endcommunity = require('./controller/enduser/community');
var endconnect = require('./controller/enduser/connect');
var endplans = require('./controller/enduser/plans');
var endlogout = require('./controller/enduser/logout');
var endmyprofile = require('./controller/enduser/myprofile');
var endtransaction =require('./controller/enduser/transanctions');
var endachivements = require('./controller/enduser/achivements');
var endeditprofile = require('./controller/enduser/editprofile');
var endfriendlist = require('./controller/enduser/friendlist');
var endwishlist = require('./controller/enduser/wishlist');
var endwallet =   require('./controller/enduser/wallet');
var endtransanctions = require('./controller/enduser/transanctions');
var endnotification = require('./controller/enduser/notification');

var pubhome = require('./controller/publisher/home');
var pubstore = require('./controller/publisher/store');
var publibrary = require('./controller/publisher/library');
var pubcommunity = require('./controller/publisher/community');
var pubmyprofile =require('./controller/publisher/myprofile');
var pubyourphotos = require('./controller/publisher/yourphotos');
var pubeditprofile = require('./controller/publisher/editprofile');
var pubpublish = require('./controller/publisher/publish');
var publogout = require('./controller/publisher/logout');
var puboffer = require('./controller/publisher/offer');
var pubpatch = require('./controller/publisher/patch');


const forum = require('./controller/forum/forum');
const create = require('./controller/forum/create');
const gossiproom = require('./controller/forum/gossiproom');
const moderate = require('./controller/forum/moderate');
const generate = require('./controller/forum/generatereport');

var app = express();

var adminHome = require('./controller/admin/home');
const server = http.createServer(app);
require('./server')(server);
const fileUpload = require('express-fileupload');

const cookieParser = require('cookie-parser');

app.use(fileUpload());

app.set('view engine', 'ejs');
app.use('/assets/css/',express.static('assets/css'));
app.use('/assets/js/',express.static('assets/js'));
app.use('/res/',express.static('res'));


app.use(express.static('public'));
app.use(express.static('./storage'));
app.use(express.static('./node_modules/@fortawesome/fontawesome-free/'));
app.use(express.static('./node_modules/bootstrap/dist/js/'));
app.use(express.static('./node_modules/bootstrap/dist/css/'));
app.use(express.static('./node_modules/jquery/dist/'));
app.use(express.static('./node_modules/popper.js/dist/umd/'));
app.use(express.static('./node_modules/moment/min'));
app.use(express.static('./node_modules/chart.js/'));


app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
//app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/registration',registration);
app.use('/home',endhome);
app.use('/store',endstore);
app.use('/library',endlibrary);
app.use('/community',endcommunity);
app.use('/connect',endconnect);
app.use('/myprofile',endmyprofile);
app.use('/plans',endplans);
app.use('/logout',endlogout);
app.use('/cart',cart);
app.use('/notification',endnotification);

app.use('/myprofile/editprofile',endeditprofile);
app.use('/myprofile/transactions',endtransaction);
app.use('/myprofile/achivements',endachivements);
app.use('/myprofile/friendlist',endfriendlist);
app.use('/myprofile/wishlist',endwishlist);
app.use('/myprofile/wallet',endwallet);
app.use('/myprofile/transanctions',endtransanctions);

app.use('/publisher/home',pubhome);
app.use('/publisher/store',pubstore);
app.use('/publisher/library',publibrary);
app.use('/publisher/library/offer',puboffer);
app.use('/publisher/library/patch',pubpatch);
app.use('/publisher/community',pubcommunity);
app.use('/publisher/myprofile',pubmyprofile);
app.use('/publisher/myprofile/yourphotos',pubyourphotos);
app.use('/publisher/myprofile/editprofile',pubeditprofile);
app.use('/publisher/publish',pubpublish);
app.use('/publisher/logout',publogout);

app.use('/admin/home',adminHome);


app.use('/forum', forum);
app.use('/forum/create', create);
app.use('/forum/gossiproom', gossiproom);
app.use('/forum/moderate', moderate);
app.use('/forum/moderate/generate-report', generate);


app.get('/', function(req, res){
	res.redirect("/login");
});

app.get('/publisher',function(req,res){
	res.redirect('/publisher/home');
});

/* app.listen(3000, function(){
	console.log('express http server started at...3000'); */


//const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');


//const app = express();


//socket chat server


//const login = require('./controller/login');
//const logout = require('./controller/logout');

//const fileUpload = require('express-fileupload');


//config
//app.set('view engine', 'ejs');
//app.use(fileUpload());






//middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

//app.use('/login', login);
//app.use('/logout', logout);



server.listen(3000, () => {
    console.log('Server running at 3000');

});