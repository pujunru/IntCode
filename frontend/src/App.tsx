import React, { useState } from 'react';
import TopBar from './components/TopBar';
import SidebarPanel from './components/SidebarPanel';
import EditorPanel from './components/EditorPanel';
import { StagewiseToolbar } from '@stagewise/toolbar-react';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'editor' | 'whiteboard'>('editor');
  const [solution, setSolution] = useState('');

  return (
    <div className="app-root">
      {process.env.NODE_ENV === 'development' && (
        <StagewiseToolbar config={{ plugins: [] }} />
      )}
      <TopBar onSubmit={() => alert('Submitted!')} />
      <div className="main-layout">
        <SidebarPanel />
        <div className="main-content">
          <EditorPanel
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            solution={solution}
            onSolutionChange={setSolution}
          />
        </div>
      </div>
    </div>
  );
};

export default App; 