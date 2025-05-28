import React from 'react';

const SidebarPanel: React.FC = () => (
  <aside className="sidebar-panel">
    <h2>Design a Rate Limiter</h2>
    <p className="problem-desc">Design a rate limiter that allows a maximum of N requests per second. The rate limiter should be thread-safe and efficient.</p>
    <hr className="sidebar-divider" />
    <div className="requirements">
      <h4>Requirements</h4>
      <ul>
        <li><input type="checkbox" disabled /> Thread-safe</li>
        <li><input type="checkbox" disabled /> Efficient</li>
        <li><input type="checkbox" disabled /> Scalable</li>
      </ul>
    </div>
    <hr className="sidebar-divider" />
    <div className="ai-scoring">
      <h4>AI Scoring</h4>
      <div className="score-row">
        <span>Correctness</span>
        <span>80%</span>
      </div>
      <div className="score-bar-bg"><div className="score-bar" style={{width: '80%', background: '#22c55e'}} /></div>
      <div className="score-desc">The design correctly implements the core rate limiting logic.</div>
      <div className="score-row">
        <span>Efficiency</span>
        <span>90%</span>
      </div>
      <div className="score-bar-bg"><div className="score-bar" style={{width: '90%', background: '#22c55e'}} /></div>
      <div className="score-desc">The solution is highly efficient and uses optimal data structures.</div>
      <div className="score-row">
        <span>Scalability</span>
        <span>70%</span>
      </div>
      <div className="score-bar-bg"><div className="score-bar" style={{width: '70%', background: '#facc15'}} /></div>
      <div className="score-desc">The design is somewhat scalable, but could be improved for very high loads.</div>
    </div>
    <div className="ai-feedback">
      <h4>AI Feedback:</h4>
      <ul className="ai-feedback-list">
        <li className="feedback-success"><span className="feedback-icon">✔</span> Good use of a sliding window algorithm for rate limiting.</li>
        <li className="feedback-warning"><span className="feedback-icon">⚠</span> Consider using a distributed cache for better scalability across multiple instances.</li>
        <li className="feedback-info"><span className="feedback-icon">ℹ</span> Explore using a token bucket algorithm as an alternative approach.</li>
      </ul>
    </div>
  </aside>
);

export default SidebarPanel; 