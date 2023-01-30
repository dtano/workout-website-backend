const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const register = async (req, res) => {
    try{
        const {firstName, lastName, email, password, username, birthDate} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashedPassword,
            birth_date: new Date(birthDate)
        }

        
        const user = await User.create(userData);
        if(user){
            let token = signJwtToken(user.id, res);
            return res.status(201).send(user);
        }else{
            return res.status(409).send("User details are not correct");
        }
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if(!user) return res.status(409).json("User not found");

        const doPasswordsMatch = await bcrypt.compare(password, user.password);
        if(doPasswordsMatch){
            let token = signJwtToken(user.id, res);
            return res.status(201).json({
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                birthDate: user.birth_date
            });
        }else{
            return res.status(401).json("Authentication failed");
        }
    }catch(err){
        console.log(err.message);
        return res.status(500).json(err.message);
    }
}

const signJwtToken = (userId, res) => {
    let token = jwt.sign({id: userId}, process.env.jwtSecret, {
        expiresIn:  1 * 24 * 60 * 60 * 1000
    });
    res.cookie("jwt", token, {maxAge: 1 * 24 * 60 * 60, httpOnly: true});
    
    return token;
}

module.exports = {
    register,
    login
}