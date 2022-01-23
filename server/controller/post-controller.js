

 import { response } from "express";
import Post from "../schema/post-schema.js";

export const createPost = async(req, res) => {
    console.log(req.body);
    try{
       const post = await new Post(request.body);
       post.save();
       response.status(200).json('blog saved successfully'); 
    }catch(error){
        response.status(500).json(error);
    }
}