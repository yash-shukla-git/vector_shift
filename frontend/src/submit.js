import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data = await response.json();
      alert(
        `Pipeline Analysis\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );
    } catch (err) {
      alert(`Failed to submit: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      background: 'var(--bg-toolbar)',
      borderTop: '1px solid var(--border-color)',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{
          background: isLoading ? 'var(--bg-input)' : 'var(--bg-node-header)',
          color: isLoading ? 'var(--text-secondary)' : 'var(--text-on-dark)',
          border: '1px solid var(--border-dark)',
          borderRadius: 'var(--node-radius)',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.04em',
          padding: '8px 28px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'var(--transition)',
        }}
        onMouseEnter={e => {
          if (!isLoading) e.currentTarget.style.background = 'var(--accent-hover)';
        }}
        onMouseLeave={e => {
          if (!isLoading) e.currentTarget.style.background = 'var(--bg-node-header)';
        }}
      >
        {isLoading ? 'Analysing...' : 'Submit Pipeline'}
      </button>
    </div>
  );
};