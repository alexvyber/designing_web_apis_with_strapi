"use strict";
/**
 * tutorial service.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService("api::tutorial.tutorial", () => ({
    // Method 2: Wrapping a core service (leaves core logic in place)
    async find(...args) {
        // Calling the default core controller
        const { results, pagination } = await super.find(...args);
        return { results, pagination };
    },
    generateSummary(data) {
        if (data.content) {
            return data.content.substring(0, 200);
        }
        return null;
    },
}));
