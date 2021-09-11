const googleAuthLibrary = require('google-auth-library');

const googleSignIn = (function(){

    function getGoogleCreds() {
        let obj = {
            clientId: "",
            clientSecret: "",
            apiKey: ""
        }

        return obj;
    }

    return {
        getGoogleCreds
    }
}());

module.exports = googleSignIn;