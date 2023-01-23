const db = require("../models");
const timeUtils = require("../utils/timeUtils");

const WeightHistory = db.weightHistory;

const getCurrentWeight = async (req, res) => {
    try {
        const userId = req.params.userId;

        const weightHistory = await WeightHistory.findAll({
            where: {
                userId: userId
            },
            order: [
                ['date_added', 'DESC']
            ]
        });
      
        if(!weightHistory){
            return res.status(200).json(0);
        }

        return res.status(200).json(weightHistory[0]);
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

const getWeightHistory = async (req, res) => {
    // Get all the weights ordered by date_added
    try {
        const userId = req.params.userId;

        const weightHistory = await WeightHistory.findAll({
            where: {
                userId: userId
            },
            order: [
                ['date_added', 'ASC']
            ]
        });

        return res.status(200).json(weightHistory);
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

const updateWeightHistory = async (req, res) => {
    // Make sure the given weight is not a negative number or over 200
    // Then use the current date and create a new entry in the database
    try{
        const newWeight = req.body.weight;
        if(newWeight <= 0) return res.status(400).json("Weight cannot be 0 or negative");

        // Find any weight records in today's date
        let weightRecords = await WeightHistory.findAll({
            where: {
                userId: req.params.userId,
                date_added: {
                    [db.Sequelize.Op.between]: [timeUtils.startOfDay(), timeUtils.endOfDay()]
                }
            }
        });
        if(weightRecords.length > 0) return res.status(400).json("You can only set your weight once a day");


        let currentDate = new Date();
        const weightData = {
            weight: newWeight,
            date_added: currentDate,
            userId: req.params.userId
        }

        const weightRecord = await WeightHistory.create(weightData);
        if(!weightRecord) throw new Error("Failed to create weight record");

        return res.status(200).json(weightRecord);
    }catch(err){
        console.log(err);
        return res.status(500).json(err.message);
    }
}

module.exports = {
    getCurrentWeight,
    getWeightHistory,
    updateWeightHistory
}