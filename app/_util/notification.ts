import { toast } from "react-toastify";

export default function notification(
  message: string,
  type: "info" | "success" | "warning" | "error" = "info",
) {
  return toast[type](message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
