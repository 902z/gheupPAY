import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMDlhYWY2Mi0wNjhlLTRkZWItYTZjMy1hMzFhYmFjZmRjNjciLCJpYXQiOjE3MTk4MDQ5NDh9.t9C0zBJupLJxfLPxXnYHlayXzXshEMIidHmUY7tjyS0`,
  },
});

export default instance;
