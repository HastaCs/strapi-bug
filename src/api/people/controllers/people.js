'use strict';


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::people.people', ({ strapi }) => ({

  async find(ctx) {
    const people = [{ name: "jhon", age: 20 }, { name: "peter", age: 20 }]

    await strapi.db.query("api::people.people").createMany({
      data: people,
    });
    ctx.body = `people inserted`;
  },
}))
