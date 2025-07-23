import React from 'react';

const applications = [
  {
    id: 1,
    position: 'Frontend Developer',
    company: 'TechStart',
    appliedDate: '1/10/2024',
    status: 'Under Review',
  },
  {
    id: 2,
    position: 'React Developer',
    company: 'WebSolutions',
    appliedDate: '1/8/2024',
    status: 'Interview Scheduled',
  },
  {
    id: 3,
    position: 'React Developer',
    company: 'WebSolutions',
    appliedDate: '1/8/2024',
    status: 'Interview Scheduled',
  },
  {
    id: 4,
    position: 'React Developer',
    company: 'WebSolutions',
    appliedDate: '1/8/2024',
    status: 'Interview Scheduled',
  },
  {
    id: 5,
    position: 'React Developer',
    company: 'WebSolutions',
    appliedDate: '1/8/2024',
    status: 'Interview Scheduled',
  },
];

const getBadgeClass = (status) => {
  switch (status) {
    case 'Under Review':
      return 'bg-warning text-dark';
    case 'Interview Scheduled':
      return 'bg-success';
    case 'Rejected':
      return 'bg-danger';
    default:
      return 'bg-secondary';
  }
};

const stats = [
  { label: 'Total', value: 1, color: 'text-dark' },
  { label: 'Pending', value: 0, color: 'text-warning' },
  { label: 'Reviewed', value: 1, color: 'text-primary' },
  { label: 'Shortlisted', value: 0, color: 'text-success' },
  { label: 'Interviewed', value: 0, color: 'text-purple' }, // we'll add custom purple color
  { label: 'Hired', value: 0, color: 'text-success' },
  { label: 'Rejected', value: 0, color: 'text-danger' },
];

const ApplicationPage = () => {
  return (
    <div className="container mt-4">
     <div className="container mt-5 bg-primary text-white p-4 rounded">
  <h1>All Applications</h1>
  <p>Track the progress of your 1 job applications</p>
</div>
 <div className="container my-4">
        <div className="d-flex gap-3 flex-wrap">
          {stats.map(({ label, value, color }) => (
            <div key={label} className="card text-center p-3" style={{ minWidth: '90px' }}>
              <h4 className={`${color} mb-1`}>{value}</h4>
              <small className="text-muted">{label}</small>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div class="form-group">
  <label for="role">Job Status</label>
  <select class="form-select" id="role">
    <option selected>Select a Status</option>
    <option value="1">Pending</option>
    <option value="2">Rejected</option>
    <option value="3">Interviewed</option>
    <option value="3">Shortlisted</option>
    <option value="3">Hired</option>
    <option value="3">Reviewed</option>
  </select>
</div>
<br/>
      </div>
      <div className="card shadow-sm rounded">
        <div className="card-body">
          {applications.map((app) => (
            <div
              key={app.id}
              className="d-flex align-items-start mb-4 border-start border-primary ps-3"
            >
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-1 fw-bold">{app.position}</h6>
                  <span className={`badge ${getBadgeClass(app.status)}`}>
                    {app.status}
                  </span>
                </div>
                <div className="text-muted">{app.company}</div>
                <div className="text-muted small">Applied {app.appliedDate}</div>
              </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ApplicationPage;

