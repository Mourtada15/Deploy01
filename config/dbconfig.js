
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_z_Yl3hKPlUt5bFkUucl', {
    dialect: 'mysql',
    host: "fintech-hassanmourtada15-395f.a.aivencloud.com",
    port: '24309',
  
 
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {  
        console.error('Unable to connect to the database: ', error);
    };
};


export default sequelize; 