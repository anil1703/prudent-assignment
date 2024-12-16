import mongoose from "mongoose";

const booksdb = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    publishedDate:{
        type:Date,
        required:true
    }
})

const books_databse = mongoose.model("books",booksdb)
export default books_databse