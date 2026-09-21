import React, { useState } from 'react';
import { addVolunteer, loginUser, registerUser } from '../Server/Api.js';
import img from'../assets/volunteer.jpeg'

const Volunteer = () => {
  const [tab, setTab] = useState('volunteer');
  const [volunteer, setVolunteer] = useState({
    fullName: '', phone: '', email: '', city: 'Durgapur', availability: 'Weekends', motivation: ''
  });
  const [auth, setAuth] = useState({ name: '', email: '', phone: '', password: '' });

  const onVolChange = (e) => setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  const onAuthChange = (e) => setAuth({ ...auth, [e.target.name]: e.target.value });

  const handleVolunteer = async (e) => {
    e.preventDefault();
    try { const res = await addVolunteer(volunteer); alert(res.data || "Volunteer Added!"); }
    catch { alert("Backend 8000 cholche na"); }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try { const res = await loginUser(auth); alert(res.data.message || "Login Success"); }
    catch { alert("Login Failed"); }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try { const res = await registerUser(auth); alert(res.data.message || "Register Success"); setTab('login'); }
    catch { alert("Register Failed"); }
  };

  return (
    <div className="vol-page">
      <div className="vol-left">
        <div className="vol-card">
          <span style={{position:'absolute', top:'-10px', left:'-10px', fontSize:'32px'}}>🌿</span>
          <span style={{position:'absolute', top:'-10px', right:'0px', fontSize:'28px'}}>🍃</span>
          <div className="vol-blob">
            <img src={img} alt="volunteer" />
          </div>
          <div className="vol-badge">✓ JOIN US<br/>MAKE IMPACT ♡</div>
          <span style={{position:'absolute', bottom:'40px', right:'-10px', fontSize:'30px'}}>🌱</span>
        </div>
      </div>

      <div className="vol-right">
        <div style={{textAlign:'right', fontWeight:'bold'}}><span style={{color:'#2e7d32'}}>🌿 NGO</span> Waste Food</div>
        <h1 style={{fontSize:'26px', fontWeight:'bold', color:'#1b5e20', marginTop:'10px', lineHeight:'1.2'}}>Be a Volunteer - Your Time<br/>Can Change Lives</h1>
        <p style={{fontSize:'12px', color:'#555', marginTop:'8px'}}>Join NGO Waste Food to help reduce food waste and support our community.</p>

        <div style={{display:'flex', gap:'8px', margin:'18px 0'}}>
          <button onClick={()=>setTab('volunteer')} className={`tab-btn ${tab==='volunteer'?'active':''}`}>Volunteer</button>
          <button onClick={()=>setTab('login')} className={`tab-btn ${tab==='login'?'active':''}`}>Login</button>
          <button onClick={()=>setTab('register')} className={`tab-btn ${tab==='register'?'active':''}`}>Register</button>
        </div>

        {tab==='volunteer' && (
          <form onSubmit={handleVolunteer}>
            <label className="label-text">Volunteer Registration</label>
            <div style={{marginTop:'8px'}}><label className="label-text">Full Name</label><input name="fullName" value={volunteer.fullName} onChange={onVolChange} placeholder="Enter your full name" className="input-field" /></div>
            <div style={{display:'flex', gap:'10px', marginTop:'10px'}}>
              <div style={{flex:1}}><label className="label-text">Phone</label><input name="phone" value={volunteer.phone} onChange={onVolChange} placeholder="+91 ........" className="input-field" /></div>
              <div style={{flex:1}}><label className="label-text">Email</label><input name="email" value={volunteer.email} onChange={onVolChange} placeholder="your.email@example.com" className="input-field" /></div>
            </div>
            <div style={{display:'flex', gap:'10px', marginTop:'10px'}}>
              <div style={{flex:1}}><label className="label-text">Your City</label><input name="city" value={volunteer.city} onChange={onVolChange} className="input-field" /></div>
              <div style={{flex:1}}><label className="label-text">Availability</label>
                <select name="availability" value={volunteer.availability} onChange={onVolChange} className="input-field">
                  <option>Weekends</option><option>Weekdays</option><option>Flexible</option>
                </select>
              </div>
            </div>
            <div style={{marginTop:'10px'}}><label className="label-text">Why you want to volunteer</label><textarea name="motivation" value={volunteer.motivation} onChange={onVolChange} placeholder="Tell us your motivation and interest..." className="input-field" rows="3"></textarea></div>
            <button type="submit" className="submit-btn">Join as Volunteer →</button>
          </form>
        )}

        {tab==='login' && (
          <form onSubmit={handleLogin}>
            <label className="label-text">Email</label><input name="email" onChange={onAuthChange} className="input-field" />
            <div style={{marginTop:'10px'}}><label className="label-text">Password</label><input name="password" type="password" onChange={onAuthChange} className="input-field" /></div>
            <button type="submit" className="submit-btn">Login →</button>
          </form>
        )}

        {tab==='register' && (
          <form onSubmit={handleRegister}>
            <label className="label-text">Name</label><input name="name" onChange={onAuthChange} className="input-field" />
            <div style={{marginTop:'10px'}}><label className="label-text">Email</label><input name="email" onChange={onAuthChange} className="input-field" /></div>
            <div style={{marginTop:'10px'}}><label className="label-text">Phone</label><input name="phone" onChange={onAuthChange} className="input-field" /></div>
            <div style={{marginTop:'10px'}}><label className="label-text">Password</label><input name="password" type="password" onChange={onAuthChange} className="input-field" /></div>
            <button type="submit" className="submit-btn">Register →</button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Volunteer;