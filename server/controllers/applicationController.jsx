import { DataTypes } from 'sequelize';

export default (sequelize) => sequelize.define('Application', {
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Interested', 'Applied', 'Offer', 'Rejected'),
        defaultValue: 'Interested',
        allowNull: false
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
    }
});

module.exports = Application;