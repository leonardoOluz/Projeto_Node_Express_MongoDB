import mongoose from "mongoose";

async function dataBaseConection() {
    mongoose.connect(process.env.DB_CONECTION_STRING);
    return mongoose.connection;
};

export default dataBaseConection;