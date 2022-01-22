import mongoose from 'mongoose';


const Connection = async() => {
    try{
        const URL='mongodb://Ankit:<Ashu@5540>@blog-shard-00-00.rrvbz.mongodb.net:27017,blog-shard-00-01.rrvbz.mongodb.net:27017,blog-shard-00-02.rrvbz.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-5fag2e-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(URL,{useNewUrlParser:true , useUnifiedTopology:true, useFindAndModify:false});
    console.log('Database is connected successfully');
    }catch(error){
        console.log('error while connecting to MongoDB',error);
    }

}

export default Connection;