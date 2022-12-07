import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  // get date range from query params
  const { start, end } = request.query;

  return response.json({ message: "Hello World!" });
});

export default router;