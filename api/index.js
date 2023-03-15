import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";



import cookieParser from "cookie-parser";
import catsRoutes from "./routes/cats.js";
import colectionsRoutes from "./routes/colections.js";
import productRoutes from "./routes/products.js";



import multer from "multer";

import cors from "cors";



const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}




const app = express();
app.use(cors(corsOptions)) 
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../clientadmin/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use("/api/posts", postRoutes);
app.use("/api/cats", catsRoutes);
app.use("/api/colections", colectionsRoutes);




app.listen(8800, () => {
  console.log("Connected!");
});