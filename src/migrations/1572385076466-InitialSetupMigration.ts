import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialSetupMigration1572385076466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        CREATE TABLE todo_note (
            id int(10) unsigned NOT NULL AUTO_INCREMENT,
            createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
            updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
            note varchar(255) NOT NULL,
            isCompleted tinyint(4) NOT NULL DEFAULT 0,
            isCleared tinyint(4) NOT NULL DEFAULT 0,
            PRIMARY KEY (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP table todo_note;')
    }

}
