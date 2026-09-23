// A sample app for BLAQPLOYMENT. It listens on the PORT the platform gives it,
// answers /healthz for the health check, and says hello everywhere else.
const http = require("node:http");

const port = Number(process.env.PORT || 8080);
const started = new Date().toISOString();

http
  .createServer((req, res) => {
    if (req.url === "/healthz") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(
      `<!doctype html><title>Hello from BLAQPLOYMENT</title><h1>Hello from BLAQPLOYMENT</h1>` +
        `<p>Running since ${started} on port ${port}.</p>` +
        `<p>Database: ${process.env.DATABASE_URL ? "connected (DATABASE_URL is set)" : "none"}.</p>`,
    );
  })
  .listen(port, () => console.log(`hello-node listening on ${port}`));

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down");
  process.exit(0);
});
