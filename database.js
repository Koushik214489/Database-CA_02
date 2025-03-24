const mongoose = require ('mongoose')
require('dotenv').config();

const connect = async () => {
    try{
        await mongoose .connect(process.env.db_URL);
        console.log(`connected to database`);
    } catch(Error) {
        console.log(`Error in connecting to Database`);
    }
}

module.exports = connect