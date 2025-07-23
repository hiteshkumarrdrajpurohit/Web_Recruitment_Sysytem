import React from "react";
import { Link } from "react-router-dom";

// Mock data
const user = {
  name: "Unnati Dongare",
  recentApplications: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "16/7/2024",
      status: "reviewed",
    },
  ],
  stats: [
    { label: "Applications Sent", value: "1", icon: "📤" },
    { label: "In Review", value: "1", icon: "🕵️" },
    { label: "Interviews", value: "0", icon: "📅" },
    { label: "Success Rate", value: "0%", icon: "📈" },
  ],
  featuredJobs: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120,000 - $160,000",
      type: "full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$130,000 - $170,000",
      type: "full-time",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$80 - $120",
      type: "contract",
    },
  ],
  quickActions: [
    {
      label: "🔍 Browse Jobs",
      description: "Find your next opportunity",
      link: "/jobs",
    },
    {
      label: "📝 Update Profile",
      description: "Keep your profile current",
      link: "/profile",
    },
    {
      label: "📊 Track Applications",
      description: "Monitor your progress",
      link: "/my-applications",
    },
  ],
};

function UserHome() {
  return (
    <div className="container py-4">
      {/* Welcome Section */}
      <div className="bg-primary text-white p-4 rounded mb-4">
        <h2>Welcome back, {user.name}!</h2>
        <p>Ready to find your next opportunity? Let’s explore the latest job openings.</p>
        <Link to="/jobs" className="btn btn-light mt-2">
          🔍 Browse Jobs
        </Link>
      </div>

      {/* Stats */}
      <div className="row text-center mb-4">
        {user.stats.map((stat, idx) => (
          <div className="col-6 col-md-3 mb-3" key={idx}>
            <div className="card h-100">
              <div className="card-body">
                <div className="display-6">{stat.icon}</div>
                <h4>{stat.value}</h4>
                <p className="text-muted">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Applications and Featured Jobs */}
      <div className="row mb-4">
        {/* Recent Applications */}
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Recent Applications</strong>
              <Link to="/my-applications" className="text-decoration-none">View all</Link>
            </div>
            <div className="card-body">
              {user.recentApplications.length > 0 ? (
                user.recentApplications.map((app, idx) => (
                  <div key={idx}>
                    <h5>{app.title}</h5>
                    <p className="mb-1 text-muted">{app.company}</p>
                    <p className="mb-1 text-secondary">📅 Applied {app.appliedDate}</p>
                    <span className="badge bg-primary">{app.status}</span>
                  </div>
                ))
              ) : (
                <p>No recent applications.</p>
              )}
            </div>
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Featured Jobs</strong>
              <Link to="/jobs" className="text-decoration-none">View all</Link>
            </div>
            <div className="card-body">
              {user.featuredJobs.map((job) => (
                <div className="border p-3 rounded mb-3" key={job.id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="mb-1">{job.title}</h5>
                      <p className="mb-0 text-muted">{job.company}</p>
                      <small className="text-secondary">📍 {job.location}</small>
                      <div className="fw-bold mt-1">{job.salary}</div>
                    </div>
                    <span
                      className={`badge ${
                        job.type === "full-time"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <Link to={`/job/${job.id}`} className="d-block mt-2 text-primary text-decoration-none">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-3">
        <div className="row">
          {user.quickActions.map((action, idx) => (
            <div className="col-md-4 mb-3 mb-md-0" key={idx}>
              <Link to={action.link} className="text-decoration-none text-dark">
                <div className="border p-3 rounded text-center h-100 hover-shadow">
                  <p className="fw-bold mb-1">{action.label}</p>
                  <p className="text-muted small">{action.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
