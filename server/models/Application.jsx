import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Application = sequelize.define('Application', {
        company: {
        type: DataTypes.STRING,
        allowNull: false
    },
        jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
        status: {
        type: DataTypes.ENUM('applied', 'interview', 'offer', 'rejected'),
        defaultValue: 'applied'
    },
        deadline: {
        type: DataTypes.DATE
    },
        notes: {
        type: DataTypes.TEXT
    }
});
return Application;
};