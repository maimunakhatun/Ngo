import React, { useState } from "react";
import donorImg from "../assets/img1.jpeg";
import {
  addDonor,
  loginUser,
  registerUser
} from "../Server/api";

const Donor = () => {
  const [tab, setTab] = useState("donate");

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

  // Donor input change
  const onDonorChange = (e) => {
    setDonor({
      ...donor,
      [e.target.name]: e.target.value
    });
  };

  // Login/Register input change
  const onAuthChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  // Donate Submit
  const handleDonate = async (e) => {
    e.preventDefault();

    if (!donor.name) {
      return alert("Please enter your name");
    }

    if (!/^[0-9]{10}$/.test(donor.phone)) {
      return alert("Please enter 10 digit number");
    }

    if (!donor.foodType) {
      return alert("Please select food type");
    }

    if (!donor.quantity) {
      return alert("Please enter quantity");
    }

    if (!donor.pickupLocation) {
      return alert("Please enter your pickup location");
    }

    try {
      const res = await addDonor(donor);

      alert("Donation Successful!");

      console.log("Server Response:", res.data);

      // Clear form
      setDonor({
        name: "",
        phone: "",
        foodType: "",
        quantity: "",
        pickupLocation: ""
      });

    } catch (error) {
      console.log("Donation Error:", error);

      if (error.response) {
        alert(
          error.response.data.message || "Donation failed"
        );
      } else {
        alert("Server connection failed");
      }
    }
  };

  // Login / Register Submit
  const handleAuth = async (e, type) => {
    e.preventDefault();

    try {
      if (type === "login") {
        const res = await loginUser(auth);
        alert(res.data);
      } else {
        const res = await registerUser(auth);
        alert(res.data);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="donor-page">

      <div className="donor-left">
        <img src={donorImg} alt="donor" />
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
            className={tab === "donate" ? "active" : ""}
            onClick={() => setTab("donate")}
          >
            Donate Now
          </button>

          <button
            className={tab === "login" ? "active" : ""}
            onClick={() => setTab("login")}
          >
            Login
          </button>

          <button
            className={tab === "register" ? "active" : ""}
            onClick={() => setTab("register")}
          >
            Register
          </button>

        </div>

        <div className="form-card">

          {/* DONATE FORM */}

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
                />
              </div>

              <div className="field">
                <label>Phone</label>

                <input
                  name="phone"
                  value={donor.phone}
                  onChange={onDonorChange}
                  placeholder="10 digit number"
                  className="form-control"
                />
              </div>

              <div className="field">
                <label>Food Type</label>

                <select
                  name="foodType"
                  value={donor.foodType}
                  onChange={onDonorChange}
                  className="form-control"
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
                />
              </div>

              <button
                type="submit"
                className="donate-btn"
              >
                Donate Now
              </button>

            </form>
          )}

          {/* LOGIN FORM */}

          {tab === "login" && (
            <form
              onSubmit={(e) => handleAuth(e, "login")}
            >

              <h2>Login</h2>

              <div className="field">
                <label>Email</label>

                <input
                  name="email"
                  value={auth.email}
                  onChange={onAuthChange}
                  placeholder="Enter email"
                  className="form-control"
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
                />
              </div>

              <button
                type="submit"
                className="donate-btn"
              >
                Login
              </button>

            </form>
          )}

          {/* REGISTER FORM */}

          {tab === "register" && (
            <form
              onSubmit={(e) => handleAuth(e, "register")}
            >

              <h2>Register</h2>

              <div className="field">
                <label>Name</label>

                <input
                  name="name"
                  value={auth.name}
                  onChange={onAuthChange}
                  placeholder="Enter name"
                  className="form-control"
                />
              </div>

              <div className="field">
                <label>Email</label>

                <input
                  name="email"
                  value={auth.email}
                  onChange={onAuthChange}
                  placeholder="Enter email address"
                  className="form-control"
                />
              </div>

              <div className="field">
                <label>Phone</label>

                <input
                  name="phone"
                  value={auth.phone}
                  onChange={onAuthChange}
                  placeholder="Enter phone no"
                  className="form-control"
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
                />
              </div>

              <button
                type="submit"
                className="donate-btn"
              >
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