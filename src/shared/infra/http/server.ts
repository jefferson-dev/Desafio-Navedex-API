import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';
import appRouter from '@shared/infra/http/routes';
import globalError from '@shared/errors/GlobalError';

import '@shared/infra/typeorm/database';
import '@shared/container';

const app = express();
const PORT = process.env.APP_PORT || 3333;

app.use(express.json());
app.use(appRouter);
app.use(globalError);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

export default app;
