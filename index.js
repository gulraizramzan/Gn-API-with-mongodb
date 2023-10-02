import bodyParser from 'body-parser';
import express from 'express';
import userRouters from './routes/userRouters.js';

const app = express();
app.use(bodyParser.json())
app.use(express.json())


app.use('/api/users',userRouters)



const port =4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});