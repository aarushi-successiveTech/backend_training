import mongoose from 'mongoose';

const MONGO_URL = "mongodb://localhost:27017/successiveData"; 

export const connectDB = async() => {
    try{

        mongoose.connect(MONGO_URL);
        console.log('mongoDB connected');
    }
    catch(err ){
        console.log('error connecting to DB');
    }
};
export default connectDB; 