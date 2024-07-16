import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [buttonPosition, setButtonPosition] = useState({
    top: "auto",
    left: "auto",
  });
  const [showingLandingPage, setShowingLandingPage] = useState(false);

  const navigate = useNavigate();

  const handleClickShowLandingPage = (event) => {
    event.preventDefault();
    setShowingLandingPage(true);
    navigate("/LandingPage");
  };

  const isFormFilled = username.trim() !== "" && email.trim() !== "";

  const handleMouseEnter = () => {
    if (!isFormFilled) {
      const top = Math.random() * 200 + "px";
      const left = Math.random() * 200 + "px";
      setButtonPosition({ top, left });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowRegistrationModal(false);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f4f8",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "center",
    },
    header: {
      marginBottom: "1rem",
      fontSize: "1.5rem",
      color: "#333",
    },
    subHeader: {
      marginBottom: "1.5rem",
      fontSize: "1rem",
      color: "#666",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "0.5rem",
      fontSize: "0.9rem",
      color: "#333",
    },
    input: {
      marginBottom: "1rem",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    button: {
      padding: "0.7rem",
      borderRadius: "4px",
      border: "none",
      backgroundColor: isFormFilled ? "#007BFF" : "#FF0000",
      color: "#fff",
      fontSize: "1rem",
      cursor: isFormFilled ? "pointer" : "not-allowed",
      top: buttonPosition.top,
      left: buttonPosition.left,
      marginBottom: "0.5rem",
    },
    registerLink: {
      marginTop: "1rem",
      fontSize: "0.9rem",
      color: "#6B88B6",
      cursor: "pointer",
    },
    modalContent: {
      width: "400px",
      height: "300px",
      margin: "auto",
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    modalOverlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Login Page</h1>
        <h3 style={styles.subHeader}>Enter your credentials below</h3>
        <form style={styles.form} action="">
          <label style={styles.label} htmlFor="username">
            Username:
          </label>
          <input
            style={styles.input}
            type="text"
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label style={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            style={styles.button}
            type="submit"
            onMouseEnter={handleMouseEnter}
            disabled={!isFormFilled}
            onClick={handleClickShowLandingPage}
          >
            SUBMIT
          </button>
        </form>
        <div style={styles.registerLink} onClick={openModal}>
          Not Registered? <span>Register User</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Register Modal"
        style={{
          content: {
            width: "400px",
            height: "300px",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "1rem", width: "100%" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                color: "#333",
              }}
            >
              <b>Full Name:</b>
            </label>
            <input
              placeholder="Enter your Full Name"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem", width: "100%" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                color: "#333",
              }}
            >
              <b>Username:</b>
            </label>
            <input
              placeholder="Generated  Username"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem", width: "100%" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                color: "#333",
              }}
            >
              <b>Email:</b>
            </label>
            <input
              placeholder="Enter your Full Name"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Register the User
          </button>
        </form>
        <div style={styles.registerLink} onClick={openModal}>
          Already Registered? <span>Login User</span>
        </div>
      </Modal>
    </div>
  );
}

export default LoginPage;
