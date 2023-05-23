import express from "express";
import mercadoLibreService from "../services/MercadolibreService";
import { printDateNow } from "../utils/DateFn";

const router = express.Router();
const meliService = new mercadoLibreService();

router.get("/help", (_req, res) => {
  res.send("Some Here!!!");
});

router.get("/", (_req, res) => {
  printDateNow("getUser");

  meliService
    .getUser()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/restriction/:id", (req, res) => {
  const id = req.params.id;
  printDateNow("getUserRestrictions.id[" + id + "]");

  meliService
    .getUserRestrictions(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/purchases/:id", (req, res) => {
  const id = req.params.id;
  printDateNow("getUserPurchases.id[" + id + "]");

  meliService
    .getUserPurchases(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/level/:id", (req, res) => {
  const id = req.params.id;
  printDateNow("getLevel.id[" + id + "]");

  meliService
    .getLevel(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/shipment/:id", (req, res) => {
  const id = req.params.id;
  printDateNow("getShipment.id[" + id + "]");

  meliService
    .getShipment(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/payment/:id", (req, res) => {
  const id = req.params.id;
  printDateNow("getPayment.id[" + id + "]");

  meliService
    .getPayment(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

export default router;
