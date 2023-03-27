import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679698418769 implements MigrationInterface {
    name = 'InitialMigration1679698418769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imageProfile" SET DEFAULT 'https://argumentumpericias.com.br/biblioteca/2019/09/sem-imagem-avatar.png'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(12) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imageProfile" DROP DEFAULT`);
    }

}
