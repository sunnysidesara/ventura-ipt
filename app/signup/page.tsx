"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { name, email, password });
  };

  return (
    <main className="main">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="header-logo">VENTURA</h1>
          </div>
          <div className="header-center">
            <h1 className="header-options">Home</h1>
            <h1 className="header-options">Platform</h1>
            <h1 className="header-options">Contact</h1>
          </div>
          <div className="header-right">
            <Link href="/login" className="btn-login">
              Log In
            </Link>
            <Link href="/signup" className="btn-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <div className="auth-container">
        <div className="auth-card">
          <Link href="/" className="auth-logo">
            <img
              src="/VENTURA.png"
              alt="VENTURA Logo"
              className="auth-logo-img"
            />
          </Link>
          <h1 className="auth-title">Create an account</h1>
          <p className="auth-subtitle">Join VENTURA today</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required /> I agree to the{" "}
                <Link href="/terms" className="auth-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="auth-link">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="auth-btn-primary">
              Sign Up
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
