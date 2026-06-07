import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, fields, handles, style }) => {
  return (
    <div
      style={{
        width: 'var(--node-width)',
        background: 'var(--bg-node)',
        borderRadius: 'var(--node-radius)',
        boxShadow: 'var(--shadow-node)',
        border: '1px solid var(--border-color)',
        fontFamily: 'var(--font-sans)',
        transition: 'var(--transition)',
        overflow: 'visible',
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-node-hover)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-node)'}
    >
      <div style={{
        background: 'var(--bg-node-header)',
        borderRadius: 'calc(var(--node-radius)) calc(var(--node-radius)) 0 0',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        <span style={{
          color: 'var(--text-on-dark)',
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          letterSpacing: '0.01em',
        }}>
          {title}
        </span>
      </div>

      <div style={{
        padding: '10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'relative',
      }}>
        {fields.map(field => (
          <div key={field.name} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
          }}>
            <label style={{
              fontSize: '10px',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                value={field.value}
                onChange={field.onChange}
                style={{
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--node-radius)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  padding: '5px 8px',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  width: '100%',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B6560' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 8px center',
                  paddingRight: '24px',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--border-dark)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
              >
                {field.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                ref={field.ref || null}
                value={field.value}
                onChange={field.onChange}
                rows={field.rows || 3}
                style={{
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--node-radius)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  padding: '5px 8px',
                  outline: 'none',
                  transition: 'var(--transition)',
                  width: '100%',
                  resize: 'none',
                  overflow: 'hidden',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--border-dark)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
              />
            ) : (
              <input
                type={field.type || 'text'}
                value={field.value}
                onChange={field.onChange}
                style={{
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--node-radius)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  padding: '5px 8px',
                  outline: 'none',
                  transition: 'var(--transition)',
                  width: '100%',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--border-dark)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
              />
            )}
          </div>
        ))}
      </div>

      {handles
        .filter(h => h.type === 'target')
        .map(h => (
          <Handle
            key={h.id}
            type="target"
            position={Position.Left}
            id={`${id}-${h.id}`}
            style={h.style || {}}
          />
        ))}

      {handles
        .filter(h => h.type === 'source')
        .map(h => (
          <Handle
            key={h.id}
            type="source"
            position={Position.Right}
            id={`${id}-${h.id}`}
            style={h.style || {}}
          />
        ))}
    </div>
  );
};