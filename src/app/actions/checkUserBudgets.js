"use server";

import { db } from "@/lib/db.server";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function checkUserBudgetsAction(email) {
  const result = await db
    .select()
    .from(Budgets)
    .where(eq(Budgets.createdBy, email));

  return result;
}
