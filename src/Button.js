import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Button = () => {
  //   const [success, setSucces] = useState("");

  function notifySuccess() {
    toast.success("Success Toast Notification !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      size: "30px",
    });
  }

  function notifyInfo() {
    toast.info(" Info Toasted Notification", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function notifyWarning() {
    toast.warning(" Warning Toast Notification", {
      position: "top-right",
      autoClose: "5000",
      hideProgressBar: false,
      closeOnClick: "true",
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function notifyError() {
    toast.error("Error Toasted Notification ", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: "true",
      pauseOnHover: true,
      autoClose: "5000",

      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="main">
        <button
          className="btn"
          id="green"
          onClick={notifySuccess}
          style={{ backgroundColor: "#1A5D1A" }}
        >
          Success
        </button>
        <button
          className="btn"
          id="blue"
          onClick={notifyInfo}
          style={{ backgroundColor: "#2794EB" }}
        >
          Info
        </button>
        <button
          className="btn"
          id="orange"
          onClick={notifyWarning}
          style={{ backgroundColor: "#E55604" }}
        >
          Warning
        </button>
        <button
          className="btn"
          id="red"
          onClick={notifyError}
          style={{ backgroundColor: "#C70039" }}
        >
          Error
        </button>
      </div>
    </>
  );
};
