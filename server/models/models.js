const sequelize = require('../db');
const {DataTypes} = require('sequelize');

// Создание сущностей

const collaborator = sequelize.define('collaborator', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullname: {type: DataTypes.STRING, unique: false},
    bossid: {type: DataTypes.INTEGER, unique: false}
});

const boss = sequelize.define('boss', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullname: {type: DataTypes.STRING, unique: false}
});

const task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    taskname: {type: DataTypes.STRING, unique: false},
    collid: {type: DataTypes.INTEGER, unique: false},
    begindate: {type: DataTypes.DATE, unique: false},
    enddate: {type: DataTypes.DATE, unique: false}
});

// Описание связей сущностей

// Связь сотрудник - задачи

task.belongsTo(collaborator);
collaborator.hasMany(task);

// Связь начальник - сотрудники

boss.hasMany(collaborator);
collaborator.belongsTo(boss);

module.exports = {
    collaborator,
    task,
    boss
}