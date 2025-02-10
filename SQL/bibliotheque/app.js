import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();

const pool = mariadb.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	connectionLimit: 5,
});

(async function asyncFunction() {
	let conn;
	try {
		conn = await pool.getConnection();
		const rows = await conn.query("SELECT * FROM Lecteurs");
		console.log(rows);
		// const res = await conn.query("INSERT INTO");
	} catch (err) {
		console.error(err);
	} finally {
		if (conn) conn.release();
	}
})();
