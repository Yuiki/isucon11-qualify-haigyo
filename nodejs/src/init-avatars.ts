import mysql from "mysql2/promise"
import fs from "fs"
import { Isu } from "./app"

const dbinfo: mysql.PoolOptions = {
  host: "192.168.0.12",
  port: 3306,
  user: "isucon",
  database: "isucondition",
  password: "isucon",
  connectionLimit: 10,
  timezone: "+09:00",
}
const pool = mysql.createPool(dbinfo)

const start = async () => {
  const db = await pool.getConnection()

  const [images] = await db.query<Isu[]>(
    "SELECT jia_isu_uuid AS name, image AS data FROM isu"
  )

  images.forEach((image) => {
    fs.writeFileSync(`../public/icons/${image.name}`, image.data)
  })
}

start()
