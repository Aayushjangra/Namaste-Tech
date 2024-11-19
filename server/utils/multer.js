import multer from "multer";


//means yaha pe server ke ander folder create kare gee uploads name se
const upload = multer({dest:"uploads/"});
export default upload