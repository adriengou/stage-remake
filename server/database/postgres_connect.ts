import { Pool } from "pg";
import { DB_CONNECTION } from "../../common/environment";

const pool = new Pool(DB_CONNECTION);
pool.connect();

export default pool;
