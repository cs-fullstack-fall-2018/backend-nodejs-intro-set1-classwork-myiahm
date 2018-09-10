
var express = require("express");
var app = express();

/* serves main page when someone types http://localhost:5000/ in a browser */

app.get("/", function(req, res) {
    // Write to HTTP response;
    var yourScore = parseInt(req.query.testScore);
    // res.send(testscore);
    if (yourScore >= 70)
    {
        res.send("CONGRATS! You PASSED!")
    } else{

        res.send( "Sorry... You FAILED")
    }}
);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
