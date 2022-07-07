import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/Notes";

// const connectDB = async () => {
//     try {
//         const connectDatabase = await mongoose.connect(MONGO_URL);

//         console.log(`Database connected ${connectDatabase.connection.host}`);
//     } catch (error) {
//         console.log(`Database connection failed ${error.message}`);
//         process.exit(1);
//     }
// }

const connectDB = function(){
    const connectDatabase = mongoose.connect(MONGO_URL).then(() => {
        console.log(`Database connected`);
    }).catch((error) => {
        console.log(`Database connection failed -> ${error.message}`);
        process.exit(1);
    })
}

export default connectDB;