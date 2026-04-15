"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
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
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Log in to your VENTURA account</p>

          <form onSubmit={handleSubmit} className="auth-form">
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <Link href="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-btn-primary">
              Log In
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link href="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
