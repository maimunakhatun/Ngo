
import React, { useState } from 'react';
import {
  addMember,
  loginUser,
  registerUser
} from '../Server/Api.js';

const Member = () => {
  const [tab, setTab] = useState('member');
  const [mType, setMType] = useState('Monthly');

  const [member, setMember] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Durgapur'
  });

  const [auth, setAuth] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const onMemberChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const onAuthChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  // JOIN AS MEMBER
  const handleMember = async (e) => {
    e.preventDefault();

    if (
      !member.fullName.trim() ||
      !member.email.trim() ||
      !member.phone.trim()
    ) {
      return alert('Please fill in name, email and phone.');
    }

    setLoading(true);

    try {
      const res = await addMember({
        ...member,
        membershipType: mType
      });

      alert(
        res.data?.message ||
        'Member registered successfully!'
      );

      setMember({
        fullName: '',
        email: '',
        phone: '',
        city: 'Durgapur'
      });

      setMType('Monthly');
    } catch (error) {
      console.error(
        'Member Error:',
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
        error.message ||
        'Member registration failed'
      );
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser({
        email: auth.email,
        password: auth.password
      });

      alert(res.data?.message || 'Login successful!');
    } catch (error) {
      console.error(
        'Login Error:',
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
        'Login failed. Please check your details.'
      );
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !auth.name.trim() ||
      !auth.email.trim() ||
      !auth.phone.trim() ||
      !auth.password
    ) {
      return alert('Please fill in all registration fields.');
    }

    setLoading(true);

    try {
      const res = await registerUser(auth);

      alert(res.data?.message || 'Registration successful!');

      setAuth({
        name: '',
        email: '',
        phone: '',
        password: ''
      });

      setTab('login');
    } catch (error) {
      console.error(
        'Register Error:',
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
        'Registration failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="member-page">

      <div className="member-left">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
          alt="Community members"
          className="member-photo"
        />
      </div>

      <div className="member-right">

        <div className="member-logo">
          <span>🌿 NOURISH</span>EARTH
        </div>

        <h1 className="member-title">
          Be a Member —
          <br />
          Join Our Mission for Good
        </h1>

        <div className="member-tabs">
          <button
            type="button"
            onClick={() => setTab('member')}
            className={`tab-btn ${
              tab === 'member' ? 'active' : ''
            }`}
          >
            Join as Member
          </button>

          <button
            type="button"
            onClick={() => setTab('login')}
            className={`tab-btn ${
              tab === 'login' ? 'active' : ''
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setTab('register')}
            className={`tab-btn ${
              tab === 'register' ? 'active' : ''
            }`}
          >
            Register
          </button>
        </div>

        {/* MEMBER FORM */}
        {tab === 'member' && (
          <form onSubmit={handleMember}>

            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1 }}>
                <label className="label-text">
                  Full Name
                </label>

                <input
                  name="fullName"
                  value={member.fullName}
                  onChange={onMemberChange}
                  placeholder="Enter your full name"
                  className="input-field"
                  required
                />
              </div>

              <div style={{ flex: 1 }}>
                <label className="label-text">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={onMemberChange}
                  placeholder="you@example.com"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Phone
              </label>

              <input
                name="phone"
                type="tel"
                value={member.phone}
                onChange={onMemberChange}
                placeholder="Enter phone number"
                className="input-field"
                required
              />
            </div>

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Membership Type
              </label>

              <br />

              <button
                type="button"
                onClick={() => setMType('Monthly')}
                className={`tab-btn ${
                  mType === 'Monthly' ? 'active' : ''
                }`}
                style={{
                  marginRight: '6px',
                  marginTop: '6px'
                }}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setMType('Yearly')}
                className={`tab-btn ${
                  mType === 'Yearly' ? 'active' : ''
                }`}
                style={{ marginTop: '6px' }}
              >
                Yearly
              </button>
            </div>

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                City
              </label>

              <input
                name="city"
                value={member.city}
                onChange={onMemberChange}
                className="input-field"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? 'Please wait...'
                : 'Join as Member →'}
            </button>

            <div className="benefits-box">
              <b>Member Benefits:</b>
              <br />
              ✅ Certificate — Official certificate
              <br />
              ✅ Volunteer Priority
              <br />
              ✅ Monthly Impact Report
            </div>

          </form>
        )}

        {/* LOGIN FORM */}
        {tab === 'login' && (
          <form onSubmit={handleLogin}>

            <label className="label-text">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={auth.email}
              onChange={onAuthChange}
              placeholder="Email"
              className="input-field"
              required
            />

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Password
              </label>

              <input
                name="password"
                type="password"
                value={auth.password}
                onChange={onAuthChange}
                placeholder="Password"
                className="input-field"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'Login →'}
            </button>

          </form>
        )}

        {/* REGISTER FORM */}
        {tab === 'register' && (
          <form onSubmit={handleRegister}>

            <label className="label-text">
              Name
            </label>

            <input
              name="name"
              value={auth.name}
              onChange={onAuthChange}
              placeholder="Full Name"
              className="input-field"
              required
            />

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Email
              </label>

              <input
                name="email"
                type="email"
                value={auth.email}
                onChange={onAuthChange}
                placeholder="Email"
                className="input-field"
                required
              />
            </div>

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Phone
              </label>

              <input
                name="phone"
                type="tel"
                value={auth.phone}
                onChange={onAuthChange}
                placeholder="Phone"
                className="input-field"
                required
              />
            </div>

            <div style={{ marginTop: '10px' }}>
              <label className="label-text">
                Password
              </label>

              <input
                name="password"
                type="password"
                value={auth.password}
                onChange={onAuthChange}
                placeholder="Password"
                className="input-field"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'Register →'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default Member;
