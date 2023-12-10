
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fintech', 'root', '4B3VMbY94wgUk5sopV9F4NKtg3va6wog', {
    dialect: 'PostgreSQL',
    host: "postgres://root:4B3VMbY94wgUk5sopV9F4NKtg3va6wog@dpg-clr0ffae9h4c73ar3d60-a.oregon-postgres.render.com/fintech",
    port: '5432',
  
 
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