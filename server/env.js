const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://sandyDB:Sandy@123@ds213239.mlab.com:13239/contactlist'; // Databse URI and database name
  process.env.databaseName = 'production database: contactlist'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/contactlist'; // Databse URI and database name
  process.env.databaseName = 'development database: contactlist'; // Database name
}
