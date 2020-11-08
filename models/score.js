module.exports = function(sequelize, DataTypes) {
    const Score = sequelize.define("Score", {
        name: DataTypes.STRING,
        score: DataTypes.INTEGER
    }); 

    return Score; 
}; 