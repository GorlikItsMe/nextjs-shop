import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

function cartIdCookieCheck(req: NextRequest) {
  const cartIdRaw = req.cookies["cart_id"];
  let cartId = 0;

  if (cartIdRaw == undefined || isNaN(parseInt(cartIdRaw))) {
    console.log("Create new cart_id");
    cartId = 1;
    return "1"; // nowe ciasteczko
  } else {
    cartId = parseInt(cartIdRaw);
  }

  return null;
}

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // force set cart_id
  const cartIdCookie = cartIdCookieCheck(req);

  // render page
  let res = NextResponse.next();
  // render page

  if (cartIdCookie != null) {
    res.cookie("cart_id", cartIdCookie);
  }

  return res;
}
