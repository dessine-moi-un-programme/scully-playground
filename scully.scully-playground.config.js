"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    projectRoot: "./src",
    projectName: "scully-playground",
    outDir: './dist/static',
    routes: {
        '/:id': {
            type: 'json',
            id: {
                url: 'http://localhost:3000/articles',
                property: 'id'
            }
        }
    }
};
