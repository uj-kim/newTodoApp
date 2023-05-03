const Todo = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        "todos",
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull: false,
                primaryKey:true,
                autoIncrement: true,
            },
            username:{
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            title:{
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            startdate:{
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null,
            },
            enddate: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            tablename: "todos",
            freezeTableName: true,
            timestamps: false,
        }
    );

    return model;
};

module.exports = Todo;