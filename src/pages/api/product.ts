// pages/api/product.ts
import { Product } from "@/types/app";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const responseData: Product = {
    id: "a3452523",
    title: "Whole-Grain Banana Bread",
    content: ` <p>
              This one-bowl banana bread —
              <a href="/">our 2018 Recipe of the Year</a> — uses the simplest
              ingredients, but is incredibly moist and flavorful. While the
              recipe calls for a 50/50 mix of flours (all-purpose and whole
              wheat), we often make the bread 100% whole wheat, and honestly? No
              one can tell, it’s that good! And not only is this bread delicious
              — it’s versatile.
            </p>`,
    time: {
      prep: "10 mins",
      bake: "1 hr to 1 hr 15 mins",
      total: "1 loaf, 12 generous servings",
    },
    yield: "1 loaf, 12 generous servings",
    image: "/images/bread.png",
  };

  switch (method) {
    case "GET":
      res.status(200).json(responseData);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}