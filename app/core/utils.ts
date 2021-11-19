import { Ctx } from "blitz";
import { Prisma, GlobalRole } from "db";
import { z } from "zod";

export const name = z.string().max(256).nonempty();
export const email = z.string().email().nonempty();
export const invitationToken = z.string().length(32);
export const password = z.string().min(10).max(100);

export default function assert(
  condition: any,
  message: string
): asserts condition {
  if (!condition) throw new Error(message);
}
