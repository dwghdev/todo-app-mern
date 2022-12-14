import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./src/routes";

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 8080;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api/todos", routes);

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch((error: any) => console.log(error));

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

// export for testing
export default app;
