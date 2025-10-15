import database from "../../../infra/database.js";

function Home() {
  console.log(database);
  return <h1> Bonecão do Posto, uhuh</h1>;
}

export default Home;
