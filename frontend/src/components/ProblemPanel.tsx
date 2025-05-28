import React from 'react';

type ProblemPanelProps = {
  problemId: number;
};

const problems = [
  {
    title: 'Design a Rate Limiter',
    statement: 'Design a rate limiter that allows a maximum of N requests per second. The rate limiter should be thread-safe and efficient.',
    requirements: ['Thread-safe', 'Efficient', 'Scalable'],
    aiScores: [
      { label: 'Correctness', value: 80, description: 'The design correctly implements the core rate limiting logic.' },
      { label: 'Efficiency', value: 90, description: 'The solution is highly efficient and uses optimal data structures.' },
      { label: 'Scalability', value: 70, description: 'The design is somewhat scalable, but could be improved for very high loads.' },
    ],
    aiFeedback: [
      { type: 'success', text: 'Good use of a sliding window algorithm for rate limiting.' },
      { type: 'warning', text: 'Consider using a distributed cache for better scalability across multiple instances.' },
      { type: 'info', text: 'Explore using a token bucket algorithm as an alternative approach.' },
    ],
  },
  // Add more problems as needed
];

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problemId }) => {
  const problem = problems[problemId] || problems[0];
  return (
    <section className="problem-panel">
      <h2>{problem.title}</h2>
      <p className="problem-statement">{problem.statement}</p>
      <h4>Requirements</h4>
      <ul className="requirements-list">
        {problem.requirements.map(req => (
          <li key={req}>{req}</li>
        ))}
      </ul>
      <h4>AI Scoring</h4>
      <div className="ai-scores">
        {problem.aiScores.map(score => (
          <div key={score.label} className="ai-score">
            <div className="score-label">
              <span>{score.label}</span>
              <span>{score.value}%</span>
            </div>
            <div className="score-bar-bg">
              <div className="score-bar" style={{ width: `${score.value}%`, background: score.label === 'Scalability' ? '#facc15' : '#22c55e' }} />
            </div>
            <div className="score-desc">{score.description}</div>
          </div>
        ))}
      </div>
      <h4>AI Feedback</h4>
      <ul className="ai-feedback-list">
        {problem.aiFeedback.map((fb, idx) => (
          <li key={idx} className={`feedback-${fb.type}`}>
            <span className="feedback-icon">
              {fb.type === 'success' && '✅'}
              {fb.type === 'warning' && '⚠️'}
              {fb.type === 'info' && 'ℹ️'}
            </span>
            <span>{fb.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProblemPanel; 