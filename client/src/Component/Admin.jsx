import React from "react";
import { Link, useLocation } from "react-router-dom";


const Admin = () => {

  const location = useLocation();

  const currentPage = location.pathname;

  // =========================
  // SIDEBAR ACTIVE FUNCTION
  // =========================
  const isActive = (path) => {
    return currentPage === path ? "admin-menu-item active" : "admin-menu-item";
  };


  // =========================
  // DASHBOARD PAGE
  // =========================
  const Dashboard = () => {
    return (
      <>
        {/* WELCOME */}
        <div className="admin-welcome">
          <div>
            <h1>Welcome, Admin!</h1>
            <p>Here's an overview of your NGO activities.</p>
          </div>

          <div className="admin-date">
            📅
            <div>
              <small>Today</small>
              <strong>08 Oct 2026</strong>
            </div>
          </div>
        </div>


        {/* STAT CARDS */}
        {/* STAT CARDS */}
<div className="admin-stat-grid">

  {/* DONATIONS */}
  <div className="stat-card donation-card">
    <div className="stat-icon">
      🍲
    </div>

    <div className="stat-info">
      <p>Total Donations</p>
      <h2>48</h2>

      <Link
        to="/admin/donations"
        className="dashboard-view-link"
      >
        View Donations →
      </Link>
    </div>
  </div>


  {/* MEMBERS */}
  <div className="stat-card member-card">
    <div className="stat-icon">
      👥
    </div>

    <div className="stat-info">
      <p>Total Members</p>
      <h2>32</h2>

      <Link
        to="/admin/members"
        className="dashboard-view-link"
      >
        View Members →
      </Link>
    </div>
  </div>


  {/* VOLUNTEERS */}
  <div className="stat-card volunteer-card">
    <div className="stat-icon">
      🙋
    </div>

    <div className="stat-info">
      <p>Total Volunteers</p>
      <h2>18</h2>

      <Link
        to="/admin/volunteers"
        className="dashboard-view-link"
      >
        View Volunteers →
      </Link>
    </div>
  </div>


  {/* MEALS DISTRIBUTED */}
  <div className="stat-card meal-card">
    <div className="stat-icon">
      🍱
    </div>

    <div className="stat-info">
      <p>Meals Distributed</p>
      <h2>12,500+</h2>

      <Link
        to="/admin/food-distribution"
        className="dashboard-view-link"
      >
        View Details →
      </Link>
    </div>
  </div>

</div>


        {/* MIDDLE SECTION */}
        <div className="admin-middle-grid">

          {/* ACTIVITY CHART */}
          <div className="admin-box activity-box">

            <div className="box-title">
              <h2>Activity Overview</h2>

              <div className="chart-legend">
                <span>● Donations</span>
                <span>● Members</span>
                <span>● Volunteers</span>
              </div>
            </div>


            <div className="fake-chart">

              <div className="chart-y">
                <span>50</span>
                <span>40</span>
                <span>30</span>
                <span>20</span>
                <span>10</span>
                <span>0</span>
              </div>


              <div className="chart-area">

                <div className="bars">

                  <div className="month">

                    <div className="bar-group">
                      <div
                        className="bar donation"
                        style={{ height: "70px" }}
                      ></div>

                      <div
                        className="bar member"
                        style={{ height: "45px" }}
                      ></div>

                      <div
                        className="bar volunteer"
                        style={{ height: "50px" }}
                      ></div>
                    </div>

                    <span>May</span>
                  </div>


                  <div className="month">

                    <div className="bar-group">
                      <div
                        className="bar donation"
                        style={{ height: "100px" }}
                      ></div>

                      <div
                        className="bar member"
                        style={{ height: "65px" }}
                      ></div>

                      <div
                        className="bar volunteer"
                        style={{ height: "55px" }}
                      ></div>
                    </div>

                    <span>Jun</span>
                  </div>


                  <div className="month">

                    <div className="bar-group">
                      <div
                        className="bar donation"
                        style={{ height: "110px" }}
                      ></div>

                      <div
                        className="bar member"
                        style={{ height: "80px" }}
                      ></div>

                      <div
                        className="bar volunteer"
                        style={{ height: "70px" }}
                      ></div>
                    </div>

                    <span>Jul</span>
                  </div>


                  <div className="month">

                    <div className="bar-group">
                      <div
                        className="bar donation"
                        style={{ height: "135px" }}
                      ></div>

                      <div
                        className="bar member"
                        style={{ height: "95px" }}
                      ></div>

                      <div
                        className="bar volunteer"
                        style={{ height: "100px" }}
                      ></div>
                    </div>

                    <span>Aug</span>
                  </div>


                  <div className="month">

                    <div className="bar-group">
                      <div
                        className="bar donation"
                        style={{ height: "160px" }}
                      ></div>

                      <div
                        className="bar member"
                        style={{ height: "125px" }}
                      ></div>

                      <div
                        className="bar volunteer"
                        style={{ height: "140px" }}
                      ></div>
                    </div>

                    <span>Sep</span>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* RECENT ACTIVITIES */}
          <div className="admin-box recent-box">

            <div className="box-title">
              <h2>Recent Activities</h2>
            </div>


            <div className="activity-item">

              <div className="activity-icon green">
                🍲
              </div>

              <div>
                <h4>New donation received</h4>
                <p>Rice - 20 kg</p>
              </div>

              <span>2 hours ago</span>

            </div>


            <div className="activity-item">

              <div className="activity-icon blue">
                👥
              </div>

              <div>
                <h4>New member registered</h4>
                <p>Name: Lata Verma</p>
              </div>

              <span>4 hours ago</span>

            </div>


            <div className="activity-item">

              <div className="activity-icon purple">
                🙋
              </div>

              <div>
                <h4>New volunteer joined</h4>
                <p>Name: Sudipa Mukherjee</p>
              </div>

              <span>6 hours ago</span>

            </div>


            <div className="activity-item">

              <div className="activity-icon orange">
                🍱
              </div>

              <div>
                <h4>Food distributed</h4>
                <p>Location: Fuljhore</p>
              </div>

              <span>8 hours ago</span>

            </div>

          </div>

        </div>


        {/* ALL USERS */}
        <div className="admin-box users-box">

          <div className="users-heading">

            <h2>All Users</h2>

            <div className="user-tabs">

              <Link to="/admin/donations">
                <button>Donors</button>
              </Link>

              <Link to="/admin/members">
                <button>Members</button>
              </Link>

              <Link to="/admin/volunteers">
                <button>Volunteers</button>
              </Link>

            </div>

          </div>


          <div className="table-header">

            <h3>👥 Recent Donors</h3>

            <Link to="/admin/donations">
              <button>View All Donors →</button>
            </Link>

          </div>


          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Food Type</th>
                  <th>Quantity</th>
                  <th>Pickup Location</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Gouri Kumari </td>
                  <td>9876543210</td>
                  <td>Rice</td>
                  <td>20 kg</td>
                  <td>Salt Lake</td>
                  <td>08 Oct 2026</td>
                  <td>
                    <button className="view-btn">
                      👁 View
                    </button>
                  </td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>Lokesh Mondal</td>
                  <td>9123456789</td>
                  <td>Vegetables</td>
                  <td>10 kg</td>
                  <td>Sector V</td>
                  <td>07 Oct 2026</td>
                  <td>
                    <button className="view-btn">
                      👁 View
                    </button>
                  </td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Ayan Chaterjee</td>
                  <td>8765432109</td>
                  <td>Packed Food</td>
                  <td>50 packets</td>
                  <td>Karunamoyee</td>
                  <td>06 Oct 2026</td>
                  <td>
                    <button className="view-btn">
                      👁 View
                    </button>
                  </td>
                </tr>


              </tbody>

            </table>

          </div>

        </div>

      </>
    );
  };


  // =========================
  // DONATIONS PAGE
  // =========================
  const Donations = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">
          <div>
            <h1>🍱 Donations</h1>
            <p>Manage all food donations.</p>
          </div>

          <button className="add-btn">
            + Add Donation
          </button>
        </div>


        <div className="admin-stat-grid">

          <div className="stat-card donation-card">
            <div className="stat-icon">🍲</div>

            <div className="stat-info">
              <p>Total Donations</p>
              <h2>48</h2>
            </div>
          </div>


          <div className="stat-card member-card">
            <div className="stat-icon">📦</div>

            <div className="stat-info">
              <p>Food Collected</p>
              <h2>850 kg</h2>
            </div>
          </div>

        </div>


        <div className="admin-box page-table-box">

          <h2>All Donations</h2>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Donor Name</th>
                  <th>Phone</th>
                  <th>Food Type</th>
                  <th>Quantity</th>
                  <th>Pickup Location</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Gouri Kumari</td>
                  <td>9876543210</td>
                  <td>Rice</td>
                  <td>20 kg</td>
                  <td>Salt Lake</td>
                  <td>08 Oct 2026</td>
                  <td>
                    <span className="status completed">
                      Collected
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>Lokesh Mondal</td>
                
                  <td>9123456789</td>
                  <td>Vegetables</td>
                  <td>10 kg</td>
                  <td>Sector V</td>
                  <td>07 Oct 2026</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Ayan Chaterjee</td>
                  <td>8765432109</td>
                  <td>Packed Food</td>
                  <td>50 packets</td>
                  <td>Karunamoyee</td>
                  <td>06 Oct 2026</td>
                  <td>
                    <span className="status completed">
                      Collected
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };


  // =========================
  // MEMBERS PAGE
  // =========================
  const Members = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>👥 Members</h1>
            <p>Manage all NGO members.</p>
          </div>

          <button className="add-btn">
            + Add Member
          </button>

        </div>


        <div className="admin-stat-grid">

          <div className="stat-card member-card">

            <div className="stat-icon">
              👥
            </div>

            <div className="stat-info">
              <p>Total Members</p>
              <h2>32</h2>
            </div>

          </div>


          <div className="stat-card meal-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div className="stat-info">
              <p>Active Members</p>
              <h2>29</h2>
            </div>

          </div>

        </div>


        <div className="admin-box page-table-box">

          <h2>All Members</h2>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Membership</th>
                  <th>Joined On</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Mandira Pobi</td>
                  <td>mandirapobi@gmail.com</td>
                  <td>9876123450</td>
                  <td>Kolkata</td>
                  <td>Monthly</td>
                  <td>08 Oct 2026</td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>Maimuna Khatun</td>
                  <td>maimunakhatun950@gmail.com</td>
                  <td>8765123098</td>
                  <td>Durgapur</td>
                  <td>Yearly</td>
                  <td>07 Oct 2026</td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Koyel Kesh</td>
                  <td>kesh67@gmail.com</td>
                  <td>9123456701</td>
                  <td>Asansol</td>
                  <td>Monthly</td>
                  <td>06 Oct 2026</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };


  // =========================
  // VOLUNTEERS PAGE
  // =========================
  const Volunteers = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>🙋 Volunteers</h1>
            <p>Manage all NGO volunteers.</p>
          </div>

          <button className="add-btn">
            + Add Volunteer
          </button>

        </div>


        <div className="admin-stat-grid">

          <div className="stat-card volunteer-card">

            <div className="stat-icon">
              🙋
            </div>

            <div className="stat-info">
              <p>Total Volunteers</p>
              <h2>18</h2>
            </div>

          </div>


          <div className="stat-card donation-card">

            <div className="stat-icon">
              ✅
            </div>

            <div className="stat-info">
              <p>Active Volunteers</p>
              <h2>15</h2>
            </div>

          </div>

        </div>


        <div className="admin-box page-table-box">

          <h2>All Volunteers</h2>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Joined On</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Jeet Mondal</td>
                  <td>jeet@gmail.com</td>
                  <td>9876501234</td>
                  <td>Kolkata</td>
                  <td>08 Oct 2026</td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>Arko das</td>
                  <td>das@gmail.com</td>
                  <td>8765012345</td>
                  <td>Newtown</td>
                  <td>07 Oct 2026</td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Sayon das</td>
                  <td>sayon@gmail.com</td>
                  <td>9123487650</td>
                  <td>Salt Lake</td>
                  <td>06 Oct 2026</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };


  // =========================
  // ALL USERS PAGE
  // =========================
  const Users = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>👤 All Users</h1>
            <p>View all donors, members and volunteers.</p>
          </div>

        </div>


        <div className="admin-stat-grid">

          <div className="stat-card donation-card">
            <div className="stat-icon">🍲</div>
            <div className="stat-info">
              <p>Donors</p>
              <h2>48</h2>
            </div>
          </div>


          <div className="stat-card member-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <p>Members</p>
              <h2>32</h2>
            </div>
          </div>


          <div className="stat-card volunteer-card">
            <div className="stat-icon">🙋</div>
            <div className="stat-info">
              <p>Volunteers</p>
              <h2>18</h2>
            </div>
          </div>

        </div>


        <div className="admin-box page-table-box">

          <h2>Users List</h2>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>City</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Gouri Kumari</td>
                  <td>kumari@gmail.com</td>
                  <td>9876543210</td>
                  <td>Donor</td>
                  <td>Kolkata</td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>Lokesh Mondal</td>
                  <td>mandira@gmail.com</td>
                  <td>9876123450</td>
                  <td>Member</td>
                  <td>Kolkata</td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Ayan Chaterjee</td>
                  <td>imran@gmail.com</td>
                  <td>9876501234</td>
                  <td>Volunteer</td>
                  <td>Newtown</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };


  // =========================
  // FOOD DISTRIBUTION
  // =========================
  const FoodDistribution = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>🍽️ Food Distribution</h1>
            <p>Manage distributed food and meals.</p>
          </div>

          <button className="add-btn">
            + Add Distribution
          </button>

        </div>


        <div className="admin-stat-grid">

          <div className="stat-card meal-card">

            <div className="stat-icon">
              🍱
            </div>

            <div className="stat-info">
              <p>Total Meals</p>
              <h2>12,500+</h2>
            </div>

          </div>


          <div className="stat-card donation-card">

            <div className="stat-icon">
              📍
            </div>

            <div className="stat-info">
              <p>Locations</p>
              <h2>15</h2>
            </div>

          </div>

        </div>


        <div className="admin-box page-table-box">

          <h2>Distribution History</h2>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Meals</th>
                  <th>Date</th>
                  <th>Volunteer</th>
                  <th>Status</th>
                </tr>

              </thead>


              <tbody>

                <tr>
                  <td>1</td>
                  <td>Fuljhore</td>
                  <td>500</td>
                  <td>08 Oct 2026</td>
                  <td>Sudipa Mukherjee</td>
                  <td>
                    <span className="status completed">
                      Completed
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>2</td>
                  <td>City Center</td>
                  <td>300</td>
                  <td>07 Oct 2026</td>
                  <td>Nadia Parveen</td>
                  <td>
                    <span className="status completed">
                      Completed
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>3</td>
                  <td>Muchipara</td>
                  <td>250</td>
                  <td>06 Oct 2026</td>
                  <td>Rahul Saha</td>
                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };


  // =========================
  // REPORTS
  // =========================
  const Reports = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>📄 Reports</h1>
            <p>View NGO activity reports.</p>
          </div>

          <button className="add-btn">
            Download Report
          </button>

        </div>


        <div className="report-grid">

          <div className="report-card">
            <h3>🍲 Donation Report</h3>
            <p>Total donations: 48</p>
            <button>View Report</button>
          </div>


          <div className="report-card">
            <h3>👥 Member Report</h3>
            <p>Total members: 32</p>
            <button>View Report</button>
          </div>


          <div className="report-card">
            <h3>🙋 Volunteer Report</h3>
            <p>Total volunteers: 18</p>
            <button>View Report</button>
          </div>


          <div className="report-card">
            <h3>🍱 Food Report</h3>
            <p>Meals distributed: 12,500+</p>
            <button>View Report</button>
          </div>

        </div>

      </div>
    );
  };


  // =========================
  // SETTINGS
  // =========================
  const Settings = () => {

    return (
      <div className="admin-inner-page">

        <div className="page-heading">

          <div>
            <h1>⚙️ Settings</h1>
            <p>Manage your admin settings.</p>
          </div>

        </div>


        <div className="settings-box">

          <h2>Admin Profile</h2>

          <div className="form-group">

            <label>Admin Name</label>

            <input
              type="text"
              value="Mandira"
              readOnly
            />

          </div>


          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              value="mandirapobi@gmail.com"
              readOnly
            />

          </div>


          <div className="form-group">

            <label>Phone</label>

            <input
              type="text"
              value="6297770824"
              readOnly
            />

          </div>


          <button className="save-btn">
            Save Changes
          </button>

        </div>

      </div>
    );
  };


  // =========================
  // WHICH PAGE TO SHOW
  // =========================

  const renderPage = () => {

    switch (currentPage) {

      case "/admin/donations":
        return <Donations />;

      case "/admin/members":
        return <Members />;

      case "/admin/volunteers":
        return <Volunteers />;

      case "/admin/users":
        return <Users />;

      case "/admin/food-distribution":
        return <FoodDistribution />;

      case "/admin/reports":
        return <Reports />;

      case "/admin/settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }

  };


  // =========================
  // MAIN ADMIN LAYOUT
  // =========================

  return (

    <div className="admin-page">


      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          <div className="admin-logo-icon">
            🍲
          </div>

          <div>
            <h2>NGO Waste Food</h2>
            <p>Real Food. Real Change.</p>
          </div>

        </div>


        <div className="admin-menu">


          <Link
            to="/admin"
            className={isActive("/admin")}
          >
            <span>⌂</span>
            Dashboard
          </Link>


          <Link
            to="/admin/donations"
            className={isActive("/admin/donations")}
          >
            <span>🍱</span>
            Donations
          </Link>


          <Link
            to="/admin/members"
            className={isActive("/admin/members")}
          >
            <span>👥</span>
            Members
          </Link>


          <Link
            to="/admin/volunteers"
            className={isActive("/admin/volunteers")}
          >
            <span>🙋</span>
            Volunteers
          </Link>


          <Link
            to="/admin/users"
            className={isActive("/admin/users")}
          >
            <span>👤</span>
            View All Users
          </Link>


          <Link
            to="/admin/food-distribution"
            className={isActive("/admin/food-distribution")}
          >
            <span>🍽️</span>
            Food Distribution
          </Link>


          <Link
            to="/admin/reports"
            className={isActive("/admin/reports")}
          >
            <span>📄</span>
            Reports
          </Link>


          <Link
            to="/admin/settings"
            className={isActive("/admin/settings")}
          >
            <span>⚙️</span>
            Settings
          </Link>


        </div>
{/* 

        <div className="admin-logout">

          <span>⇥</span>

          Logout

        </div> */}

      </aside>



      {/* ================= MAIN ================= */}

      <main className="admin-main">


        {/* TOP BAR */}

        <header className="admin-topbar">

          <div></div>

          <div className="admin-profile">

            <span className="notification">
              🔔
            </span>

            <div className="admin-avatar">
              👤
            </div>

            <span className="admin-name">
              Admin
            </span>

            <span>
              ⌄
            </span>

          </div>

        </header>



        {/* CONTENT */}

        <section className="admin-content">

          {renderPage()}

        </section>


      </main>


    </div>

  );

};

export default Admin;