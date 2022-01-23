import mongoose from 'mongoose';

 
const Connection = async() => {
    try{
        // const URL='mongodb+srv://Ankit:codeforself@cluster0.cjyny.mongodb.net/blog2?retryWrites=true&w=majority';
        const URL= 'mongodb+srv://Ankit:codeforself@cluster0.cjyny.mongodb.net/blog2?retryWrites=true&w=majority';
        // await mongoose.connect(URL,{useNewUrlParser:true , useUnifiedTopology:true, useFindAndModify:false});

        await mongoose.connect(URL);

    console.log('Database is connected successfully');
    }catch(error){
        console.log('error while connecting to MongoDB',error);
    }

}

    export default Connection;