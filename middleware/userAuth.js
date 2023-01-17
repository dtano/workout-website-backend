const express = require("express");
const db = require("../models");
const validationUtils = require("../utils/validationUtils");

const User = db.users;
const registrationRequiredFields = ["firstName", "lastName", "birthDate", "password", "confirmPassword", "email"];

const validateRegistrationDetails = async (req, res, next) => {
    try{
        // {firstName, lastName, birthDate, password, confirmPassword, email}
        if(!validationUtils.validateRequestBody(req.body, registrationRequiredFields)){
            return res.status(400).json("Request body is missing required fields");
        }

        // Make sure password and confirmPassword are equal
        const isPasswordValid = req.body.password === req.body.confirmPassword;
        if(!isPasswordValid){
            return res.status(400).json("Password does not match confirmed password");
        }
        
        const duplicateEmail = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        
        if(duplicateEmail){
            return res.status(409).json("An account with the given email already exists");
        }

        console.log("Passed all registration validation checks");
        next();
    }catch(err){
        return res.json(409).send("Registration failed");
    }
}

module.exports = {
    validateRegistrationDetails
}