import express from "express";
import MercadolibreService from "../services/MercadolibreService";

const router = express.Router();

// const mlService = new MercadolibreService();
const mlService = new MercadolibreService();

router.get("/", (_req, res) => {
  res.send(mlService.getUser());
  // res.send("entro!!");
});

// router.get("/:id", (_req, res) => {
//   res.send(mockUtils.getUserPurchases());
// });

export default router;
