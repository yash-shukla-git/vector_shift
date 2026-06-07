import { useState } from 'react';

export const DraggableNode = ({ type, label }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={() => setIsDragging(false)}
      draggable
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        padding: '6px 14px',
        borderRadius: 'var(--node-radius)',
        border: '1px solid var(--border-color)',
        background: isDragging ? 'var(--bg-node-header)' : 'var(--bg-node)',
        color: isDragging ? 'var(--text-on-dark)' : 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.02em',
        userSelect: 'none',
        transition: 'var(--transition)',
        boxShadow: isDragging ? 'var(--shadow-node-hover)' : 'var(--shadow-node)',
      }}
    >
      {label}
    </div>
  );
};