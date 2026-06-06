import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
      <div style={{
          background: 'var(--bg-toolbar)',
          borderBottom: '1px solid var(--border-color)',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
      }}>
            <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                color: 'var(--text-primary)',
                letterSpacing: '0.01em',
            }}>
                VectorShift
            </span>
          <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
          }}>
              <DraggableNode type='customInput' label='Input' />
              <DraggableNode type='llm' label='LLM' />
              <DraggableNode type='customOutput' label='Output' />
              <DraggableNode type='text' label='Text' />
              <DraggableNode type='api' label='API' />
              <DraggableNode type='filter' label='Filter' />
              <DraggableNode type='math' label='Math' />
              <DraggableNode type='note' label='Note' />
              <DraggableNode type='transform' label='Transform' />
          </div>
      </div>
    );
};