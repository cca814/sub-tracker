import "server-only";

import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");

fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, "app.db"));

const sqlPath = path.join(process.cwd(), "db", "001_init.sql");

const sql = fs.readFileSync(sqlPath, "utf8");

db.exec(sql);

export default db;
