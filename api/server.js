import "dotenv/config"
import express from "express";
import cors from "cors";
import path from "path";
import textractRouter from "./src/textractRouter.js"; // Assuming this is your router file
const app = express();


app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 6000;

// API Endpoint for Textract upload
app.use("/api/v1/textract", textractRouter);


// Serve static assets (React frontend)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

app.use("/", (req,res)=>{
  try {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
