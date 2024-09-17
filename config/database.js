import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Connexion à MySQL
const sequelizeMySQL = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Connexion à SQLite
const sequelizeSQLite = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

export { sequelizeMySQL, sequelizeSQLite };
