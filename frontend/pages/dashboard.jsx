import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          width: "50%",
          padding: "50px 80px",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#7c3aed",
              marginRight: "15px",
            }}
          ></div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            CB's News Alert App
          </h1>
        </div>

        {/* Welcome Text */}
        <h2
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#111",
          }}
        >
          Welcome
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Welcome to Real-time News Application
        </p>

        {/* Register Link Button */}
        <Link to="/register">
          <button
            style={{
              width: "250px",
              padding: "16px",
              background: "linear-gradient(to right, #7c3aed, #9333ea)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Go to Register Page
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div
        style={{
          width: "50%",
          backgroundColor: "#b794f4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: "#c4a7f7",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "38px",
              fontWeight: "bold",
            }}
          >
            Welcome back to my News App
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;