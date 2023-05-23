import { Request, Response } from "express";

const GetUser = (_request: Request, response: Response) => {
  const user = [
    {
      user_id: 1,
      name: "Mercadolibre",
      surname: "User",
      level: "ORO",
      profile_image:
        "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png",
    },
  ];
  response.json({ user: user });
};
export default GetUser;
