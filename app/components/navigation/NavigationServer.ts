"use server";

import { redirect } from "next/navigation";
import getSession from "../../lib/session";

export async function logout() {
  const session = await getSession();
  await session.destroy();
  redirect("/");
}
