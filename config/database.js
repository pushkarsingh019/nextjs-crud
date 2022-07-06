import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/Notes";

const connectDB = async () => {
    try {
        const connectDatabase = await mongoose.connect(MONGO_URL);

        console.log(`Database connected ${connectDatabase.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed`);
        process.exit(1);
    }
}

export default connectDB;