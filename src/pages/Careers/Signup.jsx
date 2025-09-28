import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const PASSWORD_CRITERIA = {
  length: { test: (pwd) => pwd.length >= 8, label: "8+ characters" },
  uppercase: { test: (pwd) => /[A-Z]/.test(pwd), label: "Uppercase letter" },
  lowercase: { test: (pwd) => /[a-z]/.test(pwd), label: "Lowercase letter" },
  number: { test: (pwd) => /\d/.test(pwd), label: "Number" },
  specialChar: {
    test: (pwd) => /[@$!%*?&]/.test(pwd),
    label: "Special character (@$!%*?&)",
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [visibility, setVisibility] = useState({ password: false, confirmPassword: false });
  const [agreeToPolicy, setAgreeToPolicy] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  }, []);

  const toggleVisibility = useCallback((field) => {
    setVisibility((p) => ({ ...p, [field]: !p[field] }));
  }, []);

  const validPass = useCallback(
    (pwd) => Object.values(PASSWORD_CRITERIA).every(({ test }) => test(pwd)),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validPass(formData.password)) return setError("Password does not meet all requirements.");
    if (formData.password !== formData.confirmPassword) return setError("Passwords do not match.");
    if (!agreeToPolicy) return setError("Please agree to the privacy policy.");
    setIsLoading(true);
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  const PwdInput = ({ name, label, val, ph }) => (
    <div className="relative">
      <label htmlFor={name} className="block text-sm text-white mb-1">{label}</label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={visibility[name] ? "text" : "password"}
          value={val}
          onChange={handleInputChange}
          placeholder={ph}
          required
          className="w-full p-2 pr-10 text-white bg-white/5 rounded-lg border border-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none font-sora text-sm"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:scale-105 transition"
          onClick={() => toggleVisibility(name)}
        >
          {visibility[name] ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black font-sora flex items-center justify-center p-4">
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-white text-black px-3 py-2 rounded-full flex items-center gap-2 shadow-lg animate-fade-in-up text-sm">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Account created! Redirecting…</span>
        </div>
      )}

      <div className="w-full max-w-4xl pl-8 md:pl-16">
        <div className="pt-16 pb-12">
          <span className="inline-block text-xs text-white bg-white/10 rounded-full px-3 py-1 mb-4">Create Account</span>
          <h1 className="text-5xl md:text-6xl leading-[100%] tracking-[-1px] font-normal bg-gradient-to-r from-white to-[#E26426] bg-clip-text text-transparent mb-8">
            Start your journey
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-lg mb-8">
            Join <strong>Ivish Careers</strong> and start applying today.
          </p>

          {error && (
            <div className="mb-6 bg-white/10 text-white px-3 py-2 rounded-lg flex items-center gap-2 border border-red-400 animate-fade-in-up text-sm">
              <XCircle className="h-4 w-4 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5 animate-fade-in-up">
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 text-white bg-white/5 rounded-lg border border-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none font-sora text-sm"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <PwdInput name="password" label="Password" val={formData.password} ph="Create password" />
              <PwdInput name="confirmPassword" label="Confirm Password" val={formData.confirmPassword} ph="Confirm password" />
            </div>

            <div className="text-sm text-white">
              <p className="font-medium mb-1">Password requirements:</p>
              <ul className="grid grid-cols-2 gap-1 text-xs">
                {Object.entries(PASSWORD_CRITERIA).map(([k, { test, label }]) => (
                  <li key={k} className="flex items-center gap-1">
                    {test(formData.password) ? (
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    ) : (
                      <XCircle className="h-3 w-3 text-red-400" />
                    )}
                    <span className={test(formData.password) ? "text-green-400" : "text-red-400"}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={agreeToPolicy}
                onChange={(e) => setAgreeToPolicy(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="privacy-policy" className="text-sm text-white">
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="text-white underline hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Statement
                </a>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-full font-medium border border-white text-black bg-white transition-transform hover:scale-105 active:scale-95 text-sm"
              >
                {isLoading ? "Creating…" : "Create Account"}
              </button>
              <a
                href="/login"
                className="px-6 py-3 rounded-full font-medium border border-white text-white transition-transform hover:scale-105 active:scale-95 text-sm"
              >
                Sign In
              </a>
            </div>

            <a
              href="/forgot-password"
              className="text-sm text-white underline hover:opacity-80 block mt-3"
            >
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
