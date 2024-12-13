import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
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
export default Application;