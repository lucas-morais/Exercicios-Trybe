import app from './app';
import './config/db';

import 'reflect-metadata';

import 'dotenv/config';

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));