import "dotenv/config";
import { getPayload } from "payload";
import config from "../src/payload.config";

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!email || !password) {
    console.error("Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD");
    process.exit(1);
  }
  const payload = await getPayload({ config });
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    limit: 1,
    overrideAccess: true,
  });
  if (existing.totalDocs > 0) {
    const user = existing.docs[0];
    await payload.update({
      collection: "users",
      id: user.id,
      overrideAccess: true,
      data: { password },
    });
    console.log(`✓ reset password for ${email}`);
  } else {
    await payload.create({
      collection: "users",
      overrideAccess: true,
      data: { email, password },
    });
    console.log(`✓ created admin ${email}`);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
