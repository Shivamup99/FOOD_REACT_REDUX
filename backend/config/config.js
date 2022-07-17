import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL = process.env.MONGO_URL
const mongooseConnection = async ()=>{
    await mongoose.connect(URL).then(()=>{
        console.log('Database Connected')
    }).catch(err=>console.log(err))
}

export default mongooseConnection;