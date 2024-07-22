import { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { WishlistItem } from "../../../types";

let wishlist: WishlistItem[] = [];

export const GET = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    if (!session?.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    return res.status(200).json(wishlist);
  }
);

export const POST = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    if (!session?.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { item } = req.body;
    wishlist.push(item as WishlistItem);
    return res.status(200).json(wishlist);
  }
);

export const DELETE = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession(req, res);
    if (!session?.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { itemId } = req.body;
    wishlist = wishlist.filter((item) => item.id !== itemId);
    return res.status(200).json(wishlist);
  }
);
