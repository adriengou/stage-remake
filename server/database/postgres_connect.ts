import { Pool } from "pg";

const pool = new Pool();
await pool.connect();
