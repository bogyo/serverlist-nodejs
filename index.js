var express = require("express");
var app = express();

var exceltojson = require("xlsx-to-json-lc");

/* serves main page */
app.get('/list', function(req, res) {
	console.log('hello', req);

	exceltojson({
	input: 'servers_filters_assignment.xlsx',
	output: null,
	lowerCaseHeaders:true //to convert all excel headers to lowr case in json
}, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log(result);
		res.json(result);
		//result will contain the overted json data
		}
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
