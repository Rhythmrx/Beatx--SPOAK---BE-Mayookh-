"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConfig = getDatabaseConfig;
const patient_model_1 = require("../modules/patient/entities/patient.model");
function getDatabaseConfig() {
    const isSSL = process.env.DB_SSL === 'true';
    return {
        dialect: 'postgres',
        schema: process.env.DB_SCHEMA,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadModels: true,
        synchronize: true,
        models: [patient_model_1.PatientModel],
        logging: false,
        ...(isSSL && {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        }),
    };
}
//# sourceMappingURL=database.config.js.map