/**
 *  classroom controller
 */

import { factories } from "@strapi/strapi";
import { sanitize } from "@strapi/utils";

export default factories.createCoreController(
  "api::classroom.classroom",
  ({ strapi }) => ({
    // async findTutorials(ctx) {
    //   ctx.response.status = 501;
    //   return "to be implemented";
    // },
    async findTutorials(ctx) {
      ctx.response.status = 501;
      strapi.log.debug(`params: ${JSON.stringify(ctx.params)}`);
      strapi.log.debug(`query: ${JSON.stringify(ctx.query)}`);
      const { params } = ctx;

      const res = await strapi
        .service("api::classroom.classroom")
        // @ts-ignore
        .findTutorials(params.id);

      const model = strapi.getModel("api::tutorial.tutorial");
      const sanitizedResults = await sanitize.contentAPI.output(res, model);
      return this.transformResponse(sanitizedResults);
    },
  })
);
