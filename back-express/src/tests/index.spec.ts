import supertest from "supertest";
import app from "../app";
// const app = require("../app");
// const supertest = require("supertest");

const request = supertest(app);

describe("Get /meli/user", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user").send();
    expect(response).toBeDefined();
  });

  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Get /meli/user/restriction", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user/restriction/1").send();
    expect(response).toBeDefined();
  });
  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user/restriction/1").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user/restriction/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Get /meli/user/purchases", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user/purchases/1").send();
    expect(response).toBeDefined();
  });
  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user/purchases/1").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user/purchases/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Get /meli/user/level", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user/level/ORO").send();
    expect(response).toBeDefined();
  });
  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user/level/ORO").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user/level/ORO").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Get /meli/user/shipment", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user/shipment/1000010191").send();
    expect(response).toBeDefined();
  });
  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user/shipment/1000010191").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user/shipment/1000010191").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Get /meli/user/payment", () => {
  test("should be defined", async () => {
    const response = await request.get("/meli/user/payment/7010194").send();
    expect(response).toBeDefined();
  });
  test("should respond with a 200 status code", async () => {
    const response = await request.get("/meli/user/payment/7010194").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an Object", async () => {
    const response = await request.get("/meli/user/payment/7010194").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});
