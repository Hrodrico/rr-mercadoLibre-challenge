import express from "express";
import userRouter from "./routes/user";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/helpz", () => {
  console.log("::: Someone pinged Here!!! :::");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`::: Server running on port ${PORT}:::`);
});
