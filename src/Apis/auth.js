// const AWS = require('aws-sdk');
// const cognitoIdentity = new AWS.CognitoIdentity();
// const { AuthenticationDetails, CognitoUser, CognitoUserPool } = require("amazon-cognito-identity-js")

// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.

async function auth(AuthenticationDetails, CognitoUser, CognitoUserPool) {
    try {
        //REST API => const username = event.requestContext.authorizer.claims['cognito:username']
        var authenticationData = {
            Username: 'shubham',
            Password: '19apr@amMI',
        };
        var authenticationDetails = new AuthenticationDetails(authenticationData);
        var poolData = {
            UserPoolId: 'us-east-1_jslFKGZNj',
            ClientId: '6vfmou0jff4m2npepdcddvcgk4'
        };
        var userPool = new CognitoUserPool(poolData);
        var userData = {
            Username: 'shubham',
            Pool: userPool
        };
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                // var accessToken = result.getAccessToken().getJwtToken();

                /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
                var idToken = result.idToken.jwtToken;
                localStorage.authToken = idToken;

                console.log("Done1")
            },

            onFailure: function(err) {
                console.log(err);
            },

        });
    } catch (err) {
        return err;
    }
}

// module.exports = auth;
// export default auth;
// export const myAuth = auth;
// module.exports = {
//     auth: auth
// };