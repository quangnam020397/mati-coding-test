import dotenv from 'dotenv';

dotenv.config();

export const server = {
  port: Number(process.env.PORT) || 3333,
  host: process.env.HOST || 'localhost',
};

export const database = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  userName: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'calendar',
};
