import mongoose from "mongoose";
import books_databse from "../Modal/book.js";


export async function getAllBooksService() {
    try{
        const books = await books_databse.find();
        return {
            status:200,
            message:"Books fetched successfully",
            data:books
        }

    }
    catch(error){
        return {
            status:500,
            message:"Error fetching books",
            
        }
        console.log("Error while fetching books")
    }
}

export async function getUpdateBookService(id,data) {
    try{
        const book = await books_databse.findByIdAndUpdate(id, data, {new:true});
        return {
            status:200,
            message:"Book updated successfully",
            
            }
        
    }
    catch(error){
        return {
            status:500,
            message:"Error updating book",
        }
    }
    
}

export async function deleteBookService(id) {
    try{
        const book = await books_databse.findByIdAndDelete(id);
        return {
            status:200,
            message:"Book deleted successfully",
        }
    }
    catch(error){
        return {
            status:500,
            message:"Error deleting book",
        }
    }


    
}

export async function getSingleBookDetailsService(id) {
    try{
        const book = await books_databse.findById(id);
        return {
            status:200,
            message:"Book found",
            data:book
            }
    }
    catch(error){
        return {
            status:500,
            message:"Error finding book",
            }
            }
    
}

export async function insertBookService(data) {
    console.log(data)
    try{
        const book = await books_databse.create(data);
        console.log("Created succeddfullly")
        return {
            status:201,
            message:"Book created successfully",
            }
        
    }
    catch(error){
        console.log("error",error)
        return {
            status:500,
            message:"Error creating book",
            }
            
    }
}