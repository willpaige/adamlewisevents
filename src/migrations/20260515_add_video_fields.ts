import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "home_hero"
    ADD COLUMN IF NOT EXISTS "video_url" varchar,
    ADD COLUMN IF NOT EXISTS "video_label" varchar,
    ADD COLUMN IF NOT EXISTS "video_heading" varchar;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "home_hero"
    DROP COLUMN IF EXISTS "video_url",
    DROP COLUMN IF EXISTS "video_label",
    DROP COLUMN IF EXISTS "video_heading";
  `)
}
