import mongoose from "mongoose";

const connectDB = async () =>{
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.error("Error connecting MongoDB : ",error.message)
   }

}

export default connectDB;