const express = require("express");
const db = require("../models");
const validationUtils = require("../utils/validationUtils");
const bcrypt = require("bcrypt");

const User = db.users;
const registrationRequiredFields = ["firstName", "lastName", "birthDate", "password", "confirmPassword", "email"];
const updateAllowedFields = ["firstName", "lastName", "birthDate", "password", "oldPassword", "email"];

const validateRegistrationDetails = async (req, res, next) => {
    try{
        // {firstName, lastName, birthDate, password, confirmPassword, email}
        if(!validationUtils.validateRequestBodyMandatoryFields(req.body, registrationRequiredFields)){
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

const validateUpdateDetails = async (req, res, next) => {
    try {
        // Check if request body is properly formatted
        if(!validationUtils.validateRequestBodyAllowedFields(req.body, updateAllowedFields)){
            return res.status(400).json("Request body contains invalid fields");
        }

        // Check if user with given id exists
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!user){
            return res.status(409).json(`User with id ${req.params.id} does not exist`);
        }

        if(req.body.password && !req.body.oldPassword){
            return res.status(400).json("User needs to input old password before updating their password");
        }

        // Check if the user inputted old password is equal to the current password saved in the db
        if(req.body.password && req.body.oldPassword){
            const doPasswordsMatch = await bcrypt.compare(req.body.oldPassword, user.password);
            if(!doPasswordsMatch){
                return res.status(400).json("Can't update user since the old password does not match current password");
            }
        }

        if(req.body.oldPassword){
            // Then delete oldPassword if exists
            delete req.body.oldPassword;
        }
        next();
    }catch(err){
        return res.status(409).json(err.message);
    }
}

const doesUserExist = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.userId
            }
        });

        if(!user) {
            return res.status(409).json(`User with id ${req.params.userId} does not exist`);
        }

        next();
    }catch(err){
        return res.status(409).json(err.message);
    }
}

module.exports = {
    validateRegistrationDetails,
    validateUpdateDetails,
    doesUserExist
}