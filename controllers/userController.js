const db = require("../models");
const bcrypt = require("bcrypt");
const objectUtils = require("../utils/objectUtils");

const User = db.users;
const WeightHistory = db.weightHistory;

const getUser = async (req, res, id) => {
    // Include the user's weight history and height history as well
    try{
        const user = await User.findOne({
            where: {
                id: id
            }, 
            include: [
                {
                    model: WeightHistory,
                    as: "weightChanges"
                }
            ]
        });
        
        if(!user){
            return res.status(409).json(`User with id ${id} not found`);
        }

        return res.status(200).json(user);
    }catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }
}

const updateUser = async (req, res, id) => {
    try{
        // Check if password is here
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        
        const updateDetails = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            birth_date: req.body.birthDate
        }
        
        // Then remove any empty properties
        const cleanedUpdateDetails = objectUtils.clean(updateDetails);
        const updatedRows = await User.update(
            cleanedUpdateDetails,
            {where: {id: id}}
        );
        
        return res.status(200).json(updatedRows);
    }catch(err){
        console.log(err);
        return res.status(400).json(err.message);
    }
}

module.exports = {
    getUser,
    updateUser
}