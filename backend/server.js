import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT||5000
import mongooseConnection from './config/config.js'
const app = express()
app.use(cors());
app.use(express.json())
mongooseConnection();
import prodctus from './routes/product.js'
app.use("/upload", express.static("upload"));
app.use('/api/data',prodctus)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})