import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { searchPhotos } from "./middleware/searchPhotos.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { photoStatistics } from "./middleware/photoStatistics.js";

const app = express();
app.use(cors());
dotenv.config();

const router = express.Router();

router.get("/api/search/photos", searchPhotos);
router.get("/api/photo/statistics", photoStatistics);

app.use(router);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
