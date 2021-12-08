require("dotenv").config();
const getEnvironmentVariable = (environmentVariable) => {
  const environmentVariableValue = process.env[environmentVariable];
  if (!environmentVariableValue) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariableValue}`
    );
  } else {
    return environmentVariableValue;
  }
};

const config = {
  //apiKey: getEnvironmentVariable('API_KEY'),
  port: getEnvironmentVariable("PORT"),
  dbHost: getEnvironmentVariable("db_host"),
  dbName: getEnvironmentVariable("db_name"),
  //dbPort: getEnvironmentVariable('db_port'),
  dbUser: getEnvironmentVariable("db_user"),
  dbPassword: getEnvironmentVariable("db_password"),
};
module.exports = config;
