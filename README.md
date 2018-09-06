# Introduction to NodeJS - Basic Backend Service

Create a basic NodeJS JavaScript implementation that will accept requests on the standard port 3000. 

The implementation should accept one HTTP GET parameter, which should be a number and passed in with the parameter name of 'testScore'.

If 'testScore' is 70 or greater, the NodeJS implementation should return "CONGRATS! You PASSED!" otherwise, the message "Sorry... You FAILED" should be returned to the browser.

BONUS: Gracefully handle any invalid requests where the query parameter either isn't passed in and/or is outside of the range of 0 - 100.
