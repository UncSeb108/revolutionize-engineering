"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, LogIn, UserPlus } from "lucide-react";

/**
 * A comprehensive user authentication component for a single page.
 * This version of the component focuses solely on the UI and animation,
 * providing a seamless user experience by combining login and registration
 * forms into a single, responsive card. Backend authentication logic has
 * been removed.
 *
 * @component
 * @returns {JSX.Element} The authentication page component.
 */
export default function Auth() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- Form Handlers ---
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting to log in with:", email, password);
    // Backend logic has been removed. This now just demonstrates the UI flow.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("This is a UI-only demo. Backend functionality is disabled.");
      console.log("Login form submitted (backend disabled).");
    }, 1500);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Client-side password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    console.log("Attempting to register with:", email, password);
    // Backend logic has been removed. This now just demonstrates the UI flow.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("This is a UI-only demo. Backend functionality is disabled.");
      console.log("Registration form submitted (backend disabled).");
    }, 1500);
  };

  // --- Animation Variants ---
  const formVariants = {
    hidden: { opacity: 0, x: isLoginView ? -20 : 20, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: isLoginView ? 20 : -20, scale: 0.95 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // --- Main Component Render ---
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A] font-serif text-white p-4">
      {/* --- Authentication Card View --- */}
      <motion.div
        className="w-full max-w-lg p-8 rounded-3xl bg-neutral-900 shadow-2xl border border-neutral-800"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          {isLoginView ? "Log In" : "Register"}
        </h1>

        <AnimatePresence mode="wait">
          {isLoginView ? (
            // --- Login Form ---
            <motion.form
              key="login-form"
              onSubmit={handleLogin}
              className="flex flex-col gap-6"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {error && (
                <p className="text-red-400 text-center font-sans">{error}</p>
              )}
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 w-5 h-5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-[#00FFFF] focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 w-5 h-5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-[#00FFFF] focus:outline-none transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#00FFFF] text-neutral-900 font-bold py-3 rounded-full shadow-lg transition-transform"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <LogIn size={20} className="w-5 h-5" /> Log In
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            // --- Registration Form ---
            <motion.form
              key="register-form"
              onSubmit={handleRegister}
              className="flex flex-col gap-6"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {error && (
                <p className="text-red-400 text-center font-sans">{error}</p>
              )}
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 w-5 h-5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-[#00FFFF] focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 w-5 h-5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-[#00FFFF] focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 w-5 h-5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-[#00FFFF] focus:outline-none transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#00FFFF] text-neutral-900 font-bold py-3 rounded-full shadow-lg transition-transform"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <UserPlus size={20} className="w-5 h-5" /> Register
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Toggle Link */}
        <p className="mt-8 text-center text-neutral-400">
          {isLoginView ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLoginView(false)}
                className="text-[#00FFFF] cursor-pointer hover:underline"
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLoginView(true)}
                className="text-[#00FFFF] cursor-pointer hover:underline"
              >
                Log In
              </span>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}
