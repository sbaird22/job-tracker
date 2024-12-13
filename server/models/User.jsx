import { DataTypes } from 'sequelize';

const User = (sequelize) => sequelize.define('User', {
    userName: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;