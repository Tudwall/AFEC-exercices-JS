import express from "express";
import userRouter from "./routes/user.routes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({ message: "the URL you're looking for does not exist" });
});

app.listen(PORT, () => {
  console.log("server up on http://localhost:", PORT);
});
