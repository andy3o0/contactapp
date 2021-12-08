const home = async (request, response, next) => {
  response.send("Hello from server");
};

module.exports = { home };
