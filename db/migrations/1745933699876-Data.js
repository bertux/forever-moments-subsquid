module.exports = class Data1745933699876 {
    name = 'Data1745933699876'

    async up(db) {
        await db.query(`CREATE TABLE "lukso_transfer" ("id" character varying NOT NULL, "block" integer NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, "txn_hash" text NOT NULL, CONSTRAINT "PK_598b50f1fb924e98b636ce44a0c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a16357b42d528693256ff0f144" ON "lukso_transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_3523a47a9686e84ccd2bf848ad" ON "lukso_transfer" ("to") `)
        await db.query(`CREATE INDEX "IDX_d0074e26fd609fba7f87bd8d7c" ON "lukso_transfer" ("txn_hash") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "lukso_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_a16357b42d528693256ff0f144"`)
        await db.query(`DROP INDEX "public"."IDX_3523a47a9686e84ccd2bf848ad"`)
        await db.query(`DROP INDEX "public"."IDX_d0074e26fd609fba7f87bd8d7c"`)
    }
}
