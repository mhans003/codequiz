module.exports = function(sequelize, DataTypes) {
    const AlgScore = sequelize.define("AlgScore", {
        name: DataTypes.STRING,
        score: DataTypes.INTEGER
    }); 

    return AlgScore; 
}; 