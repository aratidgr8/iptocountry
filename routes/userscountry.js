var express = require('express');
var router = express.Router();
const publicIp = require('public-ip');
var client_ip = "";
var querystringval = "";

publicIp.v6().then(ip => {
	client_ip = ip;
	console.log('IP v6:'+client_ip);
	querystringval = 'SELECT country_code, country_name, region_name, city_name from ip2location_db3 where INET6_ATON("'+client_ip+'") between ip_from and ip_to limit 1';
});

if(client_ip === ""){
	publicIp.v4().then(ip => {
	    client_ip = ip;
	    console.log('IP v4:'+client_ip);
	    querystringval = 'SELECT country_code, country_name, region_name, city_name from ip2location_db3 where INET_ATON("'+client_ip+'") between ip_from and ip_to limit 1';
	});
}
console.log(querystringval);

/* GET users listing. */
router.get('/', function(req, res, next) {
		connection.query(querystringval, function (error, results, fields) {
		  	if(error){
		  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
		  		//If there is error, we send the error in the error section with 500 status
		  	} else {
	  			res.send(JSON.stringify({"response": results}));
	  			//If there is no error, all is good and response is 200OK.
		  	}
  		});
});

module.exports = router;
