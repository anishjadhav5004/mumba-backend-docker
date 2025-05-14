import { DataSource } from "typeorm";
import { Post } from "../entities/post";
import { Likes } from "../entities/like";
import { Profile } from "../entities/profile";
import { User } from "../entities/user";
import { Comment } from "../entities/comments";
import { Follow } from "../entities/follow";
import { Message } from "../entities/message";

const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.DB_SERVER || "db", // Docker service name
  port: 1433, // Default MSSQL port
  username: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD || "anish123*A",
  database: process.env.DB_NAME || "master",
  synchronize: true,
  logging: false,
  entities: ["dist/entities/*.js"],
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
});

export default AppDataSource;

// module.exports = {
//     type: 'mssql',
//     host: process.env.DB_HOST || 'localhost',
//     // port: parseInt(process.env.DB_PORT) || 1433,
//     username: process.env.DB_USERNAME || 'sa',
//     password: process.env.DB_PASSWORD || 'yourStrong(!)Password',
//     database: process.env.DB_DATABASE || 'mydb',
//     entities: ['dist/**/*.entity.js'],
//     synchronize: true,
//     options: {
//       encrypt: false, // for local dev
//       trustServerCertificate: true,
//     },
//   };
