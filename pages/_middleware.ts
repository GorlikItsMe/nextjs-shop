import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // force set cart_id

  // render page
  let res = NextResponse.next();
  // render page

  return res;
}
