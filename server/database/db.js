import mongoose from 'mongoose';

const URL= 'mongodb+srv://ankit:ankitgautam@cluster0.ta9ve.mongodb.net/PROJECT0?retryWrites=true&w=majority'

mongoose.connect(URL).then( ()=> {
    console.log(`connection successful`);
  }).catch( (error)=>console.log(`no connection`));

const Connection = async() => {
    try{
       
        await mongoose.connect(URL);

    console.log('Database is connected successfully');
    }catch(error){
        console.log('error while connecting to MongoDB',error);
    }

}

    export default Connection;