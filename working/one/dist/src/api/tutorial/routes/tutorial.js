"use strict";
/**
 * tutorial router.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter("api::tutorial.tutorial", {
    except: ["find"],
    only: [],
    config: {
        find: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        update: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        delete: {
            auth: false,
            policies: [],
            middlewares: [],
        },
    },
});
