"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("Sequelize");
var dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';
var sequelize = new ORM(dbUrl);
console.log('server is running...');
//# sourceMappingURL=server.js.map