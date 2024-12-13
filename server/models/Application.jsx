import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // Disable logging; default: console.log
});

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

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database & tables created!');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();

export default Application;