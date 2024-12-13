import sequelize from '../config/connection.js';
import UserInit from './User.js';
import ApplicationInit from './Application.js';

const User = UserInit(sequelize);
const Application = ApplicationInit(sequelize);

User.hasMany(Application, { foreignKey: 'userId', onDelete: 'CASCADE' });
Application.belongsTo(User, { foreignKey: 'userId' });

export { sequelize, User, Application }