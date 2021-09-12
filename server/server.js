import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const router = express.Router();

router.get('/api/search', function (req, res) {
  res.send('hello world');
})


app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
})

