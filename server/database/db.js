import mongoose from 'mongoose';

const URL= 'mongodb+srv://Ankit:codeforself@cluster0.cjyny.mongodb.net/BLOG2?retryWrites=true&w=majority'

mongoose.connect(URL).then( ()=> {
    console.log(`connection successful`);
  }).catch( (error)=>console.log(`no connection`));

const Connection = async() => {
    try{
       
        await mongoose.connect(URL,{});

    console.log('Database is connected successfully');
    }catch(error){
        console.log('error while connecting to MongoDB',error);
    }

}

    export default Connection;