import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 as numero");
  console.log(result.rows);
  res.status(200).json({ status: "ok" });
}

export default status;
