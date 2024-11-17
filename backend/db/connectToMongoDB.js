import mongoose from "mongoose";
const connectToMongoDB=async () =>{
    try{
        await mongoose.connect('mongodb+srv://harinibudhi:hqHGkrhkyOxox30W@cluster0.qn4ccze.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0');
        console.log('connected to MongoDB');
    }catch(error){
        console.log("error connecting to MongoDB ",error.message);
    }
};
export default connectToMongoDB;