import React, { useState } from 'react';
import donorImg from '../assets/img1.jpeg';
import { addDonor, loginUser, registerUser } from '../Server/api';

const Donor = () => {
  const [tab, setTab] = useState('donate');
  
  const [donor, setDonor] = useState({
    name: "", phone: "", foodType: "", quantity: "", pickupLocation: ""
  });
  const [auth, setAuth] = useState({
    name: "", email: "", phone: "", password: ""
  });

  const onDonorChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  }
  const onAuthChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  }

  // Donate Submit
  const handleDonate = async (e) => {
    e.preventDefault();
    if (!donor.name) return alert("please enter your name");
    if (!/^[0-9]{10}$/.test(donor.phone)) return alert("please enter 10 digit number");
    if (!donor.location) return alert("please enter your location");
    try {
      const res = await addDonor(donor);
      alert("Donation Successful!");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Login / Register Submit
  const handleAuth = async (e, type) => {
    e.preventDefault();
    if (!donor.name) return alert("please enter your name");
    if (!/^[0-9]{10}$/.test(donor.phone)) return alert("please enter password");
    try {
      if (type === 'login') {
        const res = await loginUser(auth);
        alert(res.data);
      } else {
        const res = await registerUser(auth);
        alert(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="donor-page">
      <div className="donor-left"><img src={donorImg} alt="donor" /></div>

      <div className="donor-right">
        <h1>Be a Donor - Share Your Surplus</h1>
        <p className="sub-text">Your surplus food can make a real difference.</p>

        <div className="tabs">
          <button className={tab==='donate'?'active':''} onClick={()=>setTab('donate')}>Donate Now</button>
          <button className={tab==='login'?'active':''} onClick={()=>setTab('login')}>Login</button>
          <button className={tab==='register'?'active':''} onClick={()=>setTab('register')}>Register</button>
        </div>

        <div className="form-card">
          {tab === 'donate' && (
            <form onSubmit={handleDonate}>
              <h2>Donate Now</h2>
              <div className="field"><label>Name</label><input name="name" onChange={onDonorChange} placeholder="Enter name" className="form-control" /></div>
              <div className="field"><label>Phone</label><input name="phone" onChange={onDonorChange} placeholder="10 digit number" className="form-control" /></div>
              <div className="field"><label>Food Type</label><select name="foodType" onChange={onDonorChange} className="form-control"><option value="">Select</option><option>Cooked</option><option>Raw</option><option>Packed</option></select></div>
              <div className="field"><label>Quantity</label><input name="quantity" onChange={onDonorChange} placeholder="5kg / 10 boxes" className="form-control" /></div>
              <div className="field"><label>Location</label><input name="pickupLocation" onChange={onDonorChange} placeholder="Pickup address" className="form-control" /></div>
              <button type="submit" className="donate-btn">Donate Now</button>
            </form>
          )}

          {tab === 'login' && (
            <form onSubmit={(e)=>handleAuth(e,'login')}>
              <h2>Login</h2>
              <div className="field"><label>Email</label><input name="email" onChange={onAuthChange}placeholder="Enter name"  className="form-control" /></div>
              <div className="field"><label>Password</label><input type="password" name="password" onChange={onAuthChange}placeholder="Enter password"  className="form-control" /></div>
              <button type="submit" className="donate-btn">Login</button>
            </form>
          )}

          {tab === 'register' && (
            <form onSubmit={(e)=>handleAuth(e,'register')}>
              <h2>Register</h2>
              <div className="field"><label>Name</label><input name="name" onChange={onAuthChange} placeholder="Enter name"className="form-control" /></div>
              <div className="field"><label>Email</label><input name="email" onChange={onAuthChange}placeholder="Enter email address" className="form-control" /></div>
              <div className="field"><label>Phone</label><input name="phone" onChange={onAuthChange}placeholder="Enter phone no" className="form-control" /></div>
              <div className="field"><label>Password</label><input type="password" name="password" onChange={onAuthChange}placeholder="Enter pssword" className="form-control" /></div>
              <button type="submit" className="donate-btn">Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donor;