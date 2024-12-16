import express from "express";
import { getAllBooksController ,getUpdateBookController,deleteBookContoller,getSingleBookDetails,insertBookController} from "../Controller/books.js";

const router = express.Router();

// Define routes
router.get("/books", getAllBooksController);

router.put("/books/:id",getUpdateBookController)

router.delete("/books/:id",deleteBookContoller)

router.get("/books/:id",getSingleBookDetails)

router.post("/books",insertBookController)

// Export the router
export { router as routes };
