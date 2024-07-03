import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZjBhMTRhMS01MjFkLTQ4MWEtOWU1MS01ZmIyMTE0NTk3OTQiLCJpYXQiOjE3MTk5ODIwMTV9.WHsZSfqXPIAt_wW1fBG4kPfGMMJDjGWgUCNAhxBxU-c`,
  },
});

export default instance;
