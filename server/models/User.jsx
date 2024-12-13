import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Disable logging; default: console.log
    define: {
        freezeTableName: true // Prevent sequelize from pluralizing table names
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
sequelize.sync().then(() => {
    console.log('User table has been successfully created, if one doesn\'t exist');
}).catch(error => {
    console.error('This error occurred', error);
});

export default User;