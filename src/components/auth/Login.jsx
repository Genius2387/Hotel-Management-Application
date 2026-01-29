import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.get(
        `/users?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        
        const user = res.data[0];
        toast.success(`Welcome back, ${user.name}! 🎉`);
        
        // Navigate based on role
        setTimeout(() => {
          if (user.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/");
          }
        }, 500);
      } else {
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center py-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)"
      }}
    >
      {/* Animated Background Shapes */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(255, 255, 255, 0.05)",
            top: "-100px",
            left: "-100px",
            animation: "float 6s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.05)",
            bottom: "-50px",
            right: "-50px",
            animation: "float 8s ease-in-out infinite"
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{
            width: "200px",
            height: "200px",
            background: "rgba(255, 255, 255, 0.03)",
            top: "50%",
            right: "10%",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "float 10s ease-in-out infinite"
          }}
        ></div>
        
        {/* Hotel Icons Pattern */}
        <div className="position-absolute" style={{ top: "20%", left: "15%", opacity: 0.1, fontSize: "3rem" }}>🏨</div>
        <div className="position-absolute" style={{ bottom: "30%", left: "10%", opacity: 0.08, fontSize: "2.5rem" }}>🛏️</div>
        <div className="position-absolute" style={{ top: "15%", right: "20%", opacity: 0.1, fontSize: "2rem" }}>🔑</div>
        <div className="position-absolute" style={{ bottom: "25%", right: "15%", opacity: 0.08, fontSize: "2.8rem" }}>⭐</div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            {/* Login Card */}
            <div className="card shadow-lg border-0 backdrop-blur" style={{ borderRadius: "20px", background: "rgba(255, 255, 255, 0.95)" }}>
              <div className="card-body p-5">
                {/* Logo/Header */}
                <div className="text-center mb-4">
                  <div className="mb-0">
                  </div>
                  <h2 className="fw-bold mb-2">Welcome Back!</h2>
                  <p className="text-muted">Sign in to continue to OceanView Hotel</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin}>
                  {/* Email Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <span>📧</span>
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0 ps-0"
                        placeholder="Enter your email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ fontSize: "0.95rem" }}
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <span>🔒</span>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control border-start-0 border-end-0 ps-0"
                        placeholder="Enter your password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ fontSize: "0.95rem" }}
                      />
                      <button
                        className="btn btn-light border-start-0"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ borderLeft: "none" }}
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <a 
                      href="#" 
                      className="text-decoration-none small"
                      style={{ color: "#667eea" }}
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Please contact admin to reset password");
                      }}
                    >
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-semibold mb-3"
                    disabled={loading}
                    style={{
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      border: "none",
                      borderRadius: "10px"
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  {/* Divider */}
                  <div className="text-center mb-3">
                    <div className="d-flex align-items-center">
                      <hr className="flex-grow-1"/>
                      <span className="px-3 text-muted small">OR</span>
                      <hr className="flex-grow-1"/>
                    </div>
                  </div>

                  {/* Register Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Don't have an account?{" "}
                      <Link 
                        to="/register" 
                        className="fw-semibold text-decoration-none"
                        style={{ color: "#667eea" }}
                      >
                        Create Account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-4 text-white">
              <p className="small mb-2 opacity-75">
                🔒 Your data is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}

export default Login;