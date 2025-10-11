test("GET to api/v1/ returns 200", async () => {
  const res = await fetch("https://finance-news-js.vercel.app/api/v1/");
  expect(res.status).toBe(200);
});
