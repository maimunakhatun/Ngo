import React, { useState } from 'react';
import { addMember, loginUser, registerUser } from '../Server/Api.js';


const Member = () => {
  const [tab, setTab] = useState('member');
  const [mType, setMType] = useState('Monthly');
  const [member, setMember] = useState({ fullName: '', email: '', phone: '', city: 'Durgapur' });
  const [auth, setAuth] = useState({ name: '', email: '', phone: '', password: '' });

  const onMemberChange = (e) => setMember({ ...member, [e.target.name]: e.target.value });
  const onAuthChange = (e) => setAuth({ ...auth, [e.target.name]: e.target.value });

  const handleMember = async (e) => {
    e.preventDefault();
    if (!member.fullName) return alert("Full name dao");
    try { const res = await addMember({ ...member, membershipType: mType }); alert(res.data || "Joined!"); } 
    catch { alert("Backend 8000 e cholche na"); }
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
    <div className="member-page">
      <div className="member-left">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800" alt="community" className="member-photo" />
      </div>

      <div className="member-right">
        <div className="member-logo"><span>🌿 HOPE</span>BRIDGE</div>
        <h1 className="member-title">Be a Member —<br/>Join Our Mission for Good</h1>

        <div className="member-tabs">
          <button onClick={()=>setTab('member')} className={`tab-btn ${tab==='member'?'active':''}`}>Join as Member</button>
          <button onClick={()=>setTab('login')} className={`tab-btn ${tab==='login'?'active':''}`}>Login</button>
          <button onClick={()=>setTab('register')} className={`tab-btn ${tab==='register'?'active':''}`}>Register</button>
        </div>

        {tab === 'member' && (
          <form onSubmit={handleMember}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}><label className="label-text">Full Name</label><input name="fullName" value={member.fullName} onChange={onMemberChange} placeholder="Enter your full name" className="input-field" /></div>
              <div style={{ flex: 1 }}><label className="label-text">Email</label><input name="email" value={member.email} onChange={onMemberChange} placeholder="you@example.com" className="input-field" /></div>
            </div>
            <div style={{ marginTop: '10px' }}><label className="label-text">Phone</label><input name="phone" value={member.phone} onChange={onMemberChange} placeholder="+91 98765 43210" className="input-field" /></div>
            <div style={{ marginTop: '10px' }}>
              <label className="label-text">Membership Type</label><br/>
              <button type="button" onClick={()=>setMType('Monthly')} className={`tab-btn ${mType==='Monthly'?'active':''}`} style={{marginRight:'6px', marginTop:'6px'}}>Monthly</button>
              <button type="button" onClick={()=>setMType('Yearly')} className={`tab-btn ${mType==='Yearly'?'active':''}`} style={{marginTop:'6px'}}>Yearly</button>
            </div>
            <div style={{ marginTop: '10px' }}><label className="label-text">City</label><input name="city" value={member.city} onChange={onMemberChange} className="input-field" style={{background:'#f5f5f5'}} /></div>
            <button type="submit" className="submit-btn">Join as Member →</button>
            <div className="benefits-box">
              <b>Member Benefits:</b><br/>✅ Certificate — Official certificate<br/>✅ Volunteer Priority<br/>✅ Monthly Impact Report
            </div>
          </form>
        )}

        {tab === 'login' && (
          <form onSubmit={handleLogin}>
            <label className="label-text">Email</label><input name="email" onChange={onAuthChange} placeholder="Email" className="input-field" />
            <div style={{ marginTop: '10px' }}><label className="label-text">Password</label><input name="password" type="password" onChange={onAuthChange} placeholder="Password" className="input-field" /></div>
            <button type="submit" className="submit-btn">Login →</button>
          </form>
        )}

        {tab === 'register' && (
          <form onSubmit={handleRegister}>
            <label className="label-text">Name</label><input name="name" onChange={onAuthChange} placeholder="Full Name" className="input-field" />
            <div style={{ marginTop: '10px' }}><label className="label-text">Email</label><input name="email" onChange={onAuthChange} placeholder="Email" className="input-field" /></div>
            <div style={{ marginTop: '10px' }}><label className="label-text">Phone</label><input name="phone" onChange={onAuthChange} placeholder="Phone" className="input-field" /></div>
            <div style={{ marginTop: '10px' }}><label className="label-text">Password</label><input name="password" type="password" onChange={onAuthChange} placeholder="Password" className="input-field" /></div>
            <button type="submit" className="submit-btn">Register →</button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Member;