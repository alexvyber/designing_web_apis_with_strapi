"use strict";
/**
 *  classroom controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const utils_1 = require("@strapi/utils");
exports.default = strapi_1.factories.createCoreController("api::classroom.classroom", ({ strapi }) => ({
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
        const sanitizedResults = await utils_1.sanitize.contentAPI.output(res, model);
        return this.transformResponse(sanitizedResults);
    },
}));
