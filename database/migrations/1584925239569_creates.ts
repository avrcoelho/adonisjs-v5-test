import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Creates extends BaseSchema {
  protected $tableName = "posts";

  public async up() {
    this.schema.createTable(this.$tableName, table => {
      table.increments("id");
      table.string("title");
      table.string("content");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.$tableName);
  }
}
