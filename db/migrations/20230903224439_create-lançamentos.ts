import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('lancamento',(table) => {
        table.uuid('id').primary()
        table.bigInteger('id_fornecedor').unsigned().index().references('id').inTable('lancamento');
        table.bigInteger('id_nota').unsigned().index().references('id').inTable('lancamento');
        table.timestamp('data_vencimento')
        table.timestamp('data_pagamento')
        table.float('valor').notNullable()
        table.string('metodo_pagamento').notNullable()
        table.integer('numero_nota').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('lancamentos')
}

