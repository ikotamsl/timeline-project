const sequelize = require('../db');
const {DataTypes} = require('sequelize');

// Создание сущностей

const Collaborator = sequelize.define('collaborator', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullname: {type: DataTypes.STRING, unique: false},
    bossId: {type: DataTypes.INTEGER, unique: false}
});

const Boss = sequelize.define('boss', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullname: {type: DataTypes.STRING, unique: false}
});

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    taskname: {type: DataTypes.STRING, unique: false},
    begindate: {type: DataTypes.DATE, unique: false},
    enddate: {type: DataTypes.DATE, unique: false}
});

// Описание связей сущностей

// Связь сотрудник - задачи

Task.belongsTo(Collaborator);
Collaborator.hasMany(Task);

// Связь начальник - сотрудники

Boss.hasMany(Collaborator);
Collaborator.belongsTo(Boss);

module.exports = {
    Collaborator,
    Task,
    Boss
}