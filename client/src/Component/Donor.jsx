
import React, { useState } from "react";
import donorImg from "../assets/img1.jpeg";
import {
  addDonor,
  loginUser,
  registerUser
} from "../Server/Api.js";

const Donor = () => {
  const [tab, setTab] = useState("donate");
  const [loading, setLoading] = useState(false);

  const [donor, setDonor] = useState({
    name: "",
    phone: "",
    foodType: "",
    quantity: "",
    pickupLocation: ""
  });

  const [auth, setAuth] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const onDonorChange = (e) => {
    setDonor({
      ...donor,
      [e.target.name]: e.target.value
    });
  };

  const onAuthChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  // DONATE FORM SUBMIT
  const handleDonate = async (e) => {
    e.preventDefault();

    console.log("Donate button clicked:", donor);

    if (!donor.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/^[0-9]{10}$/.test(donor.phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    if (!donor.foodType) {
      alert("Please select food type");
      return;
    }

    if (!donor.quantity.trim()) {
      alert("Please enter quantity");
      return;
    }

    if (!donor.pickupLocation.trim()) {
      alert("Please enter pickup location");
      return;
    }

    try {
      setLoading(true);

      const res = await addDonor(donor);

      console.log("Donation response:", res.data);

      alert(
        res.data?.message || "Donation Successful!"
      );

      setDonor({
        name: "",
        phone: "",
        foodType: "",
        quantity: "",
        pickupLocation: ""
      });

    } catch (error) {
      console.error(
        "Donation Error:",
        error.response?.data || error
      );

      if (error.response) {
        alert(
          error.response.data?.message ||
          error.response.data?.error ||
          "Donation failed"
        );
      } else {
        alert(
          "Cannot connect to server. Check if backend is running on port 8000."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // LOGIN / REGISTER
  const handleAuth = async (e, type) => {
    e.preventDefault();

    try {
      const res =
        type === "login"
          ? await loginUser(auth)
          : await registerUser(auth);

      alert(
        res.data?.message ||
        (typeof res.data === "string"
          ? res.data
          : "Request successful")
      );

    } catch (error) {
      console.error(
        `${type} error:`,
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong. Check the server."
      );
    }
  };

  return (
    <div className="donor-page">
      <div className="donor-left">
        <img src={donorImg} alt="Donor" />
      </div>

      <div className="donor-right">
        <div className="member-logo">
          <span>🌿 NOURISH</span>EARTH
        </div>

        <h1>Be a Donor - Share Your Surplus</h1>

        <p className="sub-text">
          Your surplus food can make a real difference.
        </p>

        <div className="tabs">
          <button
            type="button"
            className={tab === "donate" ? "active" : ""}
            onClick={() => setTab("donate")}
          >
            Donate Now
          </button>

          <button
            type="button"
            className={tab === "login" ? "active" : ""}
            onClick={() => setTab("login")}
          >
            Login
          </button>

          <button
            type="button"
            className={tab === "register" ? "active" : ""}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        <div className="form-card">
          {tab === "donate" && (
            <form onSubmit={handleDonate}>
              <h2>Donate Now</h2>

              <div className="field">
                <label>Name</label>
                <input
                  name="name"
                  value={donor.name}
                  onChange={onDonorChange}
                  placeholder="Enter name"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={donor.phone}
                  onChange={onDonorChange}
                  placeholder="10 digit number"
                  className="form-control"
                  maxLength={10}
                  required
                />
              </div>

              <div className="field">
                <label>Food Type</label>
                <select
                  name="foodType"
                  value={donor.foodType}
                  onChange={onDonorChange}
                  className="form-control"
                  required
                >
                  <option value="">Select</option>
                  <option value="Cooked">Cooked</option>
                  <option value="Raw">Raw</option>
                  <option value="Packed">Packed</option>
                </select>
              </div>

              <div className="field">
                <label>Quantity</label>
                <input
                  name="quantity"
                  value={donor.quantity}
                  onChange={onDonorChange}
                  placeholder="5kg / 10 boxes"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Location</label>
                <input
                  name="pickupLocation"
                  value={donor.pickupLocation}
                  onChange={onDonorChange}
                  placeholder="Pickup address"
                  className="form-control"
                  required
                />
              </div>

              <button
                type="submit"
                className="donate-btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Donate Now"}
              </button>
            </form>
          )}

          {tab === "login" && (
            <form onSubmit={(e) => handleAuth(e, "login")}>
              <h2>Login</h2>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={auth.email}
                  onChange={onAuthChange}
                  placeholder="Enter email"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={auth.password}
                  onChange={onAuthChange}
                  placeholder="Enter password"
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="donate-btn">
                Login
              </button>
            </form>
          )}

          {tab === "register" && (
            <form onSubmit={(e) => handleAuth(e, "register")}>
              <h2>Register</h2>

              <div className="field">
                <label>Name</label>
                <input
                  name="name"
                  value={auth.name}
                  onChange={onAuthChange}
                  placeholder="Enter name"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={auth.email}
                  onChange={onAuthChange}
                  placeholder="Enter email address"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={auth.phone}
                  onChange={onAuthChange}
                  placeholder="Enter phone number"
                  className="form-control"
                  required
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={auth.password}
                  onChange={onAuthChange}
                  placeholder="Enter password"
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="donate-btn">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donor;
