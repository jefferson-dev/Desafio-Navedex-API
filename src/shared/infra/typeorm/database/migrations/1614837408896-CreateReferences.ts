import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateReferences1614837408896
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers_projects_projects',
        columns: [
          {
            name: 'naversId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'projectsId',
            type: 'uuid',
            isPrimary: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'projects_navers_navers',
        columns: [
          {
            name: 'projectsId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'naversId',
            type: 'uuid',
            isPrimary: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'navers_projects_projects',
      new TableForeignKey({
        name: 'foreign_navers_navers_pivot',
        columnNames: ['naversId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'navers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'navers_projects_projects',
      new TableForeignKey({
        name: 'foreign_navers_projects_pivot',
        columnNames: ['projectsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects_navers_navers',
      new TableForeignKey({
        name: 'foreign_project_projects_pivot',
        columnNames: ['projectsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects_navers_navers',
      new TableForeignKey({
        name: 'foreign_project_navers_pivot',
        columnNames: ['naversId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'navers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'projects_navers_navers',
      'foreign_project_navers_pivot',
    );
    await queryRunner.dropForeignKey(
      'projects_navers_navers',
      'foreign_project_projects_pivot',
    );
    await queryRunner.dropForeignKey(
      'navers_projects_projects',
      'foreign_navers_projects_pivot',
    );
    await queryRunner.dropForeignKey(
      'navers_projects_projects',
      'foreign_navers_projects_pivot',
    );

    await queryRunner.dropTable('projects_navers_navers');

    await queryRunner.dropTable('navers_projects_projects');
  }
}
