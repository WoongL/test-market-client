export const API_URI =
  process.env.NODE_ENV === "production"
    ? "https://lw-test-market.herokuapp.com"
    : "http://localhost:8080";
