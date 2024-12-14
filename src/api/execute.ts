import { createServer, Model } from 'miragejs';

createServer({
  models: {
    executionResult: Model,
  },

  seeds(server) {
    server.create("executionResult", { id: "1", status: "success", output: "Hello, world!\n" });
    server.create("executionResult", { id: "2", status: "error", error: "SyntaxError: Unexpected token" });
  },

  routes() {

    this.post("/execute", (_, request) => {
      const { code } = JSON.parse(request.requestBody);
      console.log(request.requestBody)

      if (code.includes("error")) {
        return { status: "error", error: "SyntaxError: Unexpected token" };
      } else {
        return { status: "success", output: "Hello, world!\n" };
      }
    });

    this.passthrough();
  }
});
