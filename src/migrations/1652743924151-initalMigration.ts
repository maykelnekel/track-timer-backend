import { MigrationInterface, QueryRunner } from "typeorm";

export class initalMigration1652743924151 implements MigrationInterface {
    name = 'initalMigration1652743924151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "timer" ("id" SERIAL NOT NULL, "activity" character varying NOT NULL, "sample" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "initial_time" character varying NOT NULL, "final_time" character varying NOT NULL, "total_time" character varying NOT NULL, CONSTRAINT "PK_b476163e854c74bff55b29d320a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "timer_executions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "initial_time" character varying NOT NULL, "final_time" character varying NOT NULL, "total_time" character varying NOT NULL, "timerId" integer, CONSTRAINT "PK_74dd48f6cf41677afadf096ba51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "timer_executions" ADD CONSTRAINT "FK_db6c70c313010acdeb78b1eaadb" FOREIGN KEY ("timerId") REFERENCES "timer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "timer_executions" DROP CONSTRAINT "FK_db6c70c313010acdeb78b1eaadb"`);
        await queryRunner.query(`DROP TABLE "timer_executions"`);
        await queryRunner.query(`DROP TABLE "timer"`);
    }

}
