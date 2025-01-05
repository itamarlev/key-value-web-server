import express from 'express';
import bodyParser from 'body-parser';
import keyValueRoutes from './routes/keyValueRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', keyValueRoutes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});