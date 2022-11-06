import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'MYSQL5045.site4now.net',
  user: 'a7aff4_telerik',
  password: 'A12345678z',
  database: 'db_a7aff4_telerik'
});
  
export default db;