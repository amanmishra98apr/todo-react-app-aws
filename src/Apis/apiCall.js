// const config = require("./development.json");
import axios from 'axios'
const { AuthenticationDetails, CognitoUser, CognitoUserPool } = require("amazon-cognito-identity-js")


async function auth(AuthenticationDetails, CognitoUser, CognitoUserPool) {
    try {
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


// api call
async function apicall(apiDetails, params) {
    auth(AuthenticationDetails, CognitoUser, CognitoUserPool)
    return new Promise(async(resolve, reject) => {
        try {
            let result;
            if (apiDetails.type === 'get' && params) {
                result = await axios.get(apiDetails.url + `${params}`, {
                    headers: {
                        "Authorization": localStorage.authToken
                    }
                })
                resolve(result.data)
            } else if (apiDetails.type === 'get' && !params) {
                result = await axios.get(apiDetails.url, {
                    headers: {
                        "Authorization": localStorage.authToken
                    }
                })
                resolve(result.data)
            } else if (apiDetails.type === 'delete') {
                result = await axios.delete(apiDetails.url + `${params}`, {
                    headers: {
                        "Authorization": localStorage.authToken
                    }
                })
                resolve(result.status)
            } else if (apiDetails.type === 'post') {
                let payload = params;
                result = await axios.post(apiDetails.url, payload, {

                    headers: {
                        "Authorization": localStorage.authToken
                    }
                })
                resolve(result.status)
            } else if (apiDetails.type === 'put') {
                let payload = params;
                result = await axios.put(apiDetails.url, payload, {

                    headers: {
                        "Authorization": localStorage.authToken
                    }
                })
                resolve(result.status)
            }

        } catch (err) {
            reject(err.message);
        }
    })
}

// module.exports = apicall;
export default apicall;