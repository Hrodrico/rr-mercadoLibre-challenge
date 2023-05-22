import express from "express";
import mercadoLibreService from "../services/MercadolibreService";

const router = express.Router();

const meliService = new mercadoLibreService();

router.get("/help", (_req, res) => {
  res.send("Some Here!!!");
});

router.get("/", (_req, res) => {
  meliService
    .getUser()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/restriction/:id", (req, res) => {
  const id = req.params.id;
  meliService
    .getUserRestrictions(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/purchases/:id", (req, res) => {
  const id = req.params.id;
  meliService
    .getUserPurchases(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/level/:id", (req, res) => {
  const id = req.params.id;
  meliService
    .getLevel(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/shipment/:id", (req, res) => {
  const id = req.params.id;
  meliService
    .getShipment(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

router.get("/payment/:id", (req, res) => {
  const id = req.params.id;
  meliService
    .getPayment(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

export default router;
