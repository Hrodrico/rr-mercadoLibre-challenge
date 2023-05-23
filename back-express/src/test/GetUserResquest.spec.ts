import { Request, Response } from "express";
import GetUserRequest from "./GetUserRequest";

describe("Get user request", () => {
  test("return with user", () => {
    let responseObject = {};
    const request = {};
    const response: Partial<Response> = {
      json: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };

    const expectedUser = [
      {
        user_id: 1,
        name: "Mercadolibre",
        surname: "User",
        level: "ORO",
        profile_image:
          "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png",
      },
    ];

    GetUserRequest(request as Request, response as Response);
    expect(responseObject).toEqual({ user: expectedUser });
  });
});
