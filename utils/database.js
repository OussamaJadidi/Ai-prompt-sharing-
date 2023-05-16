import mongoose from 'mongoose';

let isConnected = false;//track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery' , true);

    if(isConnected){
        console.log('Mongo db is already connected');
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            userNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('mongodb is connected')
    } catch(error) {
        console.log(error)
    }
}