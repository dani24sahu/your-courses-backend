import mongoose from "mongoose";

export const connectDB = async() => {
    const {connection} = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4})

    console.log(`MongoDB connected with ${connection.host}`)
}