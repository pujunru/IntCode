import React from 'react';
import MonacoEditor from '@monaco-editor/react';

type EditorPanelProps = {
  selectedTab: 'editor' | 'whiteboard';
  onTabChange: (tab: 'editor' | 'whiteboard') => void;
  solution: string;
  onSolutionChange: (val: string) => void;
};

const EditorPanel: React.FC<EditorPanelProps> = ({ selectedTab, onTabChange, solution, onSolutionChange }) => (
  <section className="editor-panel">
    <div className="editor-tabs">
      <button
        className={selectedTab === 'editor' ? 'active' : ''}
        onClick={() => onTabChange('editor')}
      >
        Editor
      </button>
      <button
        className={selectedTab === 'whiteboard' ? 'active' : ''}
        onClick={() => onTabChange('whiteboard')}
      >
        Whiteboard
      </button>
    </div>
    <div className="editor-content">
      {selectedTab === 'editor' ? (
        <div style={{ width: '100%', minHeight: 300, background: 'transparent', border: 'none', borderRadius: 6, flex: 1 }}>
          <MonacoEditor
            height="400px"
            defaultLanguage="typescript"
            value={solution}
            onChange={(v: string | undefined) => onSolutionChange(v || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              theme: 'vs-light',
              automaticLayout: true,
            }}
          />
        </div>
      ) : (
        <div className="whiteboard-placeholder">[Whiteboard coming soon]</div>
      )}
    </div>
  </section>
);

export default EditorPanel; 