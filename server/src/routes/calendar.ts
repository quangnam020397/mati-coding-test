import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  // get date range from query params
  const { from, to } = request.query;

  console.log(from, to);

  return response.json({ message: "Hello World!" });
});

export default router;