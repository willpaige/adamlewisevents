import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Residencies } from "./collections/Residencies";
import { Services } from "./collections/Services";
import { CoverageAreas } from "./collections/CoverageAreas";
import { Testimonials } from "./collections/Testimonials";
import { Bookings } from "./collections/Bookings";
import { ProcessSteps } from "./collections/ProcessSteps";
import { GalleryEvents } from "./collections/GalleryEvents";
import { Submissions } from "./collections/Submissions";

import { SiteSettings } from "./globals/SiteSettings";
import { HomeHero } from "./globals/HomeHero";
import { AboutPage } from "./globals/AboutPage";
import { PageIntros } from "./globals/PageIntros";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  secret: process.env.PAYLOAD_SECRET || "dev-secret-please-override",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  editor: lexicalEditor(),
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — Adam Lewis DJ",
    },
  },
  collections: [
    Users,
    Residencies,
    Services,
    CoverageAreas,
    Testimonials,
    Bookings,
    ProcessSteps,
    GalleryEvents,
    Submissions,
  ],
  globals: [SiteSettings, HomeHero, AboutPage, PageIntros],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI!,
    },
    push: process.env.NODE_ENV !== "production",
  }),
  sharp,
});
