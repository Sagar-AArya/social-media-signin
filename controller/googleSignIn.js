const googleAuthLibrary = require('google-auth-library');

const googleSignIn = (function(){

    function getGoogleCreds() {
        let obj = {
            clientId: "91259364304-7ag6jfjip527sfuggil44egvd7uqka3p.apps.googleusercontent.com",
            clientSecret: "76FaQHWQVzJIMw08aNxtn39w",
            apiKey: "AIzaSyDLJ-w9k6R5o8ZInze2vSA6ob4IWzZ6F4g"
        }

        return obj;
    }

    return {
        getGoogleCreds
    }
}());

module.exports = googleSignIn;