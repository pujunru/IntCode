import React from 'react';

type ProblemSidebarProps = {
  selectedId: number;
  onSelect: (id: number) => void;
};

const problems = [
  { id: 0, title: 'Design a Rate Limiter' },
  { id: 1, title: 'Design a URL Shortener' },
  { id: 2, title: 'Design a Cache System' },
];

const ProblemSidebar: React.FC<ProblemSidebarProps> = ({ selectedId, onSelect }) => (
  <aside className="problem-sidebar">
    <h3>Problems</h3>
    <ul>
      {problems.map(problem => (
        <li
          key={problem.id}
          className={selectedId === problem.id ? 'selected' : ''}
          onClick={() => onSelect(problem.id)}
        >
          {problem.title}
        </li>
      ))}
    </ul>
  </aside>
);

export default ProblemSidebar; 