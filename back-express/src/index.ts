import express from "express";
import userRoute from "./routes/userRoute";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/help", () => {
  console.log("::: Someone pinged Here!!! :::");
});

app.use("/meli/user", userRoute);

app.listen(PORT, () => {
  console.log(`::: Server running on port ${PORT}:::`);
});
