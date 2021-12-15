import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import { globalErrors } from './middlewares/globalErros';
import routes from './routes';

createConnection()
  .then(connection => {
    const app = express();
    const PORT = 3333;

    app.use(express.json());
    app.use(routes);

    app.use(globalErrors);

    app.listen(PORT, () => {
      console.log(`[server]: Server is tunning at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log('Unable to connect to the server', err);
  });
