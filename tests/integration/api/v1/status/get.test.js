test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://verbose-robot-wrqp66xvrv9xf5794-3000.app.github.dev/",
  );
  expect(response.status).toBe(200);
});
