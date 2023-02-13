import express from "express";
import { Request, Response } from "express";
import config from "./config";
import routes from "./routes";
import cors from "cors";

const app = express();
const PORT = config.port || 3000;
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`app listening on port http://localhost:${PORT} !`)
);
app.use((req: Request, res: Response) => {
  res.status(404).send("Not found");
});

export default app;
