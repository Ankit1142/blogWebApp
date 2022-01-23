import mongoose  from "mongoose";


const postSchema = mongoose.Schema({
    title:{
        type: 'string',
        required:'true',
        unique: 'true'
    },
    description:{
        type: 'string',
        required:'true'
    },
    picture:{
        type: 'string',
        required:'false'
    },
    username:{
        type: 'string',
        required:'true'
    },
    categories:{
        type: 'string',
        required:'false'
    },
    createdDate:{
        type: 'date'
    }
})

const post=mongoose.model('post',postSchema);

export default post;