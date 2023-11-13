const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Rod's API",
    description:
      "API Node JS developpé grace au framework Express et une base de donnée MongoDB",
  },
  host: "mern-server-api-six.vercel.app",
  schemes: ["https"],
  /*host: "localhost:9004",
  schemes: ["http"],*/
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
