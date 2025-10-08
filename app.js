import express from "express";
import cors from "cors";
import carsRoutes from "./routes/carsRoutes.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/camps", carsRoutes);

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

class mainController {

  this.app = app;

  app.get("/", (req, res) => {
    res.send(200, "Üdvözlünk a nyári tábor foglaló oldalán!");
  }

  app.get("/users", (req, res) => {
    res.send(200, "Itt az összes felhasználót megtalálod!");
  }

  app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send(200, `Itt a ${id} azonosítójú felhasználó részletes leírása!`).json();
  }

  app.get("/camps", (req, res) => {
    res.send(200, "Itt az összes tábort megtalálod!");
  }

  app.get("/camps/:id", (req, res) => {
    const { id } = req.params;
    res.send(200, `Itt a ${id} azonosítójú tábor részletes leírása!`);
  }

  app.post("/camps", (req, res) => {
    const { name, location } = req.body;
    res.send(201, `Új tábor hozzáadva: ${name}, helyszín: ${location}`);
  });
}