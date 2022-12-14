"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    beforeCreate(event) {
        const { params: { data }, } = event;
        data.summary = strapi
            .service("api::tutorial.tutorial")
            // @ts-ignore
            .generateSummary(data);
    },
    beforeUpdate(event) {
        const { params: { data }, } = event;
        data.summary = strapi
            .service("api::tutorial.tutorial")
            // @ts-ignore
            .generateSummary(data);
    },
};
