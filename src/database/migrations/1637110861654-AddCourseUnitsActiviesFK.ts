import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddCourseUnitsActiviesFK1637110861654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("activies", new TableForeignKey({
      name: "fk_course_units_activies",
      columnNames:["courseUnitId"],
      referencedColumnNames:["id"],
      referencedTableName: "course_units",
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("activities", "fk_course_units_activities")
  }
}