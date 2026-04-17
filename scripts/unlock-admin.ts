import "dotenv/config";
import { getPayload } from "payload";
import config from "../src/payload.config";

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  if (!email) {
    console.error("Set SEED_ADMIN_EMAIL");
    process.exit(1);
  }
  const payload = await getPayload({ config });
  // @ts-expect-error unlock only needs email
  await payload.unlock({ collection: "users", data: { email } });
  console.log(`✓ unlocked ${email}`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
