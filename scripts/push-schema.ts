import "dotenv/config";
(process.env as Record<string, string>).NODE_ENV = "development";
import { getPayload } from "payload";
import config from "../src/payload.config";

async function main() {
  await getPayload({ config });
  console.log("✓ Schema synced to database");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
