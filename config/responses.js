function userExistsResponse(req, res) {
    return res.status(200).json({
        success: false,
        message: ['user already exists']
    })
}

function userSignedUpResponse(req, res) {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}

function userSignedOutResponse(req, res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req, res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req, res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req, res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}

function verifyResponse(req, res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

function operationUnauthorized(req, res) {
    return res.status(401).json({
        success: false,
        message: "Cant realice this operation",
    });
}

function operationNotFound(req, res) {
    return res.status(404).json({
        success: false,
        message: "Couldn't find the operationNotFound",
    });
}

module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    operationUnauthorized,
    operationNotFound,
}