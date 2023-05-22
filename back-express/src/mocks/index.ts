// istanbul ignore file

// User
// import userJSON from "./usuarios"; /*Error: El archivo 'mocks/usuarios/index.ts' no es un módulo.ts(2306) */
// import userRestrictionsJSON from "./usuarios/restricciones";
// import userPurchasesJSON from "./usuarios/compras";
import userJSON from "./usuarios/usuarios.json";
import userRestrictionsJSON from "./usuarios/restricciones.json";
import userPurchasesJSON from "./usuarios/compras.json";

// Level
// import levelJSON from "./nivel"; //Error: El archivo 'back-express/src/mocks/nivel/index.ts' no es un módulo.ts(2306)
const levelJSON = require("./nivel");
// import levelJSON from "./nivel/nivel.json";

// Payments
// import paymentsJSON from "./transacciones";//Error: El archivo 'back-express/src/mocks/transacciones/index.ts' no es un módulo.ts(2306)
import paymentsJSON from "./transacciones/transacciones.json";

// Shipments
// import shipmentsJSON from "./envios";//Error: El archivo 'back-express/src/mocks/envios/index.ts' no es un módulo.ts(2306)
import shipmentsJSON from "./envios/envios.json";

export default class MockUtils {
  basePath: string;
  constructor() {
    this.basePath = "./mocks";
  }

  _readJSON(
    jsonFile: unknown,
    parameter = null,
    timeout = 1000,
    notFoundErrorMessage = ""
  ) {
    return new Promise((resolve, reject) => {
      try {
        if (!jsonFile || (parameter && !jsonFile[parameter])) {
          const error = new Error(notFoundErrorMessage);
          // error.status = 404;//La propiedad 'status' no existe en el tipo 'Error'.ts(2339)
          error.message = "Error: 404";
          throw error;
        }
        console.log("_readJSON.timeout:::[", timeout, "]");
        console.log("_readJSON.parameter:::[", parameter, "]");
        console.log("_readJSON.jsonFile:::[", jsonFile, "]");
        setTimeout(() => {
          // resolve(parameter ? jsonFile[parameter] : jsonFile);
          resolve(jsonFile);
        }, timeout);
      } catch (error) {
        reject(error);
      }
    });
  }

  getUser() {
    console.log("MockUtils.getUser():::[", this._readJSON(userJSON), "]");
    return this._readJSON(userJSON);
  }

  getUserRestrictions(userId: null | undefined) {
    return this._readJSON(
      userRestrictionsJSON,
      userId,
      3000,
      `Could not find restrictions for user of id ${userId}`
    );
  }

  getUserPurchases(userId: null | undefined) {
    return this._readJSON(
      userPurchasesJSON,
      userId,
      1500,
      `Could not find purchases for user of id ${userId}`
    );
  }

  getLevel(levelId: null | undefined) {
    return this._readJSON(
      levelJSON,
      levelId,
      500,
      `Could not find level of id "${levelId}"`
    );
  }

  getShipment(shipmentId: null | undefined) {
    return this._readJSON(
      shipmentsJSON,
      shipmentId,
      1200,
      `Could not find shipment of id ${shipmentId}`
    );
  }

  getPayment(paymentId: null | undefined) {
    return this._readJSON(
      paymentsJSON,
      paymentId,
      2200,
      `Could not find payment of id ${paymentId}`
    );
  }
}

module.exports = MockUtils;
