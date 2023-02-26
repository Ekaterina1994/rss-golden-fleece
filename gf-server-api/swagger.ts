import swaggerJsDoc from "swagger-jsdoc";
import swaggerDefinition from "./static/swaggerConfigurationTemplate.json";
import {config} from "dotenv";

config();

export const GF_SERVER_API_HOST = process.env.GF_SERVER_API_HOST;
export const GF_SERVER_API_PORT = process.env.GF_SERVER_API_PORT;

swaggerDefinition.servers[0].url = "https://golden-fleece-server-api.onrender.com/";

const swaggerJsDocOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts", "./src/model/*.ts"],
};

export const apiSpec = swaggerJsDoc(swaggerJsDocOptions);