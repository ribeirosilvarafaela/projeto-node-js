import database from "../../../infra/database.js";

function status(req, res) {
  console.log(database);
  res.status(200).json({ status: "ok" });
}

export default status;
