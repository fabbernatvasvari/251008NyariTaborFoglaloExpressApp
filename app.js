import express from "express";
import cors from "cors";
import campsRoutes from "./routes/carsRoutes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/camps", campsRoutes);

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

class MainController {
  constructor(app) {
    this.app = app;

  app.get("/", (req, res) => {
      res.status(200).send("Üdvözlünk a nyári tábor foglaló oldalán!");
    });

    app.get("/users", (req, res) => {
      res.status(200).send("Itt az összes felhasználót megtalálod!");
    });

    app.get("/users/:id", (req, res) => {
      const { id } = req.params;
      res.status(200).send(`Itt a ${id} azonosítójú felhasználó részletes leírása!`);
    });

    app.get("/camps", (req, res) => {
      res.status(200).send("Itt az összes tábort megtalálod!");
    });

    app.get("/camps/:id", (req, res) => {
      const { id } = req.params;
      res.status(200).send(`Itt a ${id} azonosítójú tábor részletes leírása!`);
    });

    app.post("/camps", (req, res) => {
      const { name, location } = req.body;
      res.status(201).send(`Új tábor hozzáadva: ${name}, helyszín: ${location}`);
    });
  }
}

new MainController(app);