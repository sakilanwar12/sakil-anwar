import { getEnv } from "@/lib/getEnv";

export const clientEnv = {
  MONGODB_URI: getEnv("MONGODB_URI") as string,
};
