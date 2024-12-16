import { getAllBooksService,getUpdateBookService,deleteBookService ,getSingleBookDetailsService,insertBookService} from "../Service/books.js";

export async function getAllBooksController(req, res) {
    try {
        const response = await getAllBooksService();
        return res.status(response.status).json({
            message: response.message,
            data: response.data
        });
    } catch (error) {
        console.error("Error in getAllBooksController:", error);
        return res.status(500).json({
            message: "An error occurred while fetching books.",
            error: error.message
        });
    }
}

export async function getUpdateBookController(req,res) {
    console.log("hii")
    const {id} = req.params;
    const data = req.body;
    console.log(id,data)
    try {
        const response = await getUpdateBookService(id, data);
        return res.status(response.status).json({
            message: response.message,
           
            });
        }
        catch(error){
            console.error("Error in getUpdateBookController:", error);
            return res.status(500).json({
                message: "An error occurred while updating book.",
                error: error.message
                });
                
        }

    
}

export async function deleteBookContoller(req,res) {
    const {id} = req.params;
    try {
        const response = await deleteBookService(id);
        return res.status(response.status).json({
            message: response.message,
            data: response.data
            });
            }
            catch(error){
                console.error("Error in deleteBookController:", error);
                return res.status(500).json({
                    message: "An error occurred while deleting book.",
                    error: error.message
                    });
                
    
}}

export async function getSingleBookDetails(req,res) {
    try{
        const id = req.params.id;
        const response = await getSingleBookDetailsService(id);
        return res.status(response.status).json({
            message: response.message,
            data: response.data
            });
        
    }
    catch(error){
        console.error("Error in getSingleBookDetailsController:", error);
        return res.status(500).json({
            message: "An error occurred while fetching book details.",
            error: error.message
            });
    }
}

export async function insertBookController(req, res) {
    console.log("hii")
    const data = req.body;
    try {
        const fetching = await insertBookService(data);  // Get the result from the service
        return res.status(fetching.status).json({  // Use fetching here instead of response
            message: fetching.message,
            data: fetching.data  // Optionally send the data back as well
        });
    } catch (error) {
        console.error("Error in insertBookController:", error);
        return res.status(500).json({
            message: "An error occurred while inserting book.",
            error: error.message
        });
    }
}
