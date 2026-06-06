import {Handle, Position} from "reactflow";

export const BaseNode = ({id, title, fields, handles}) => {
  return (
    <div style={{width: 200, height: 80, border: '1px solid black', position: 'relative'}}>
      {handles
        .filter(h => h.type === 'target')
        .map(h => (
          <Handle
            key={h.id}
            type='target'
            position={Position.Left}
            id={`${id}-${h.id}`}
            style={h.style || {}}
          />
        ))
      }

      <div>
        <span>{title}</span>
      </div>

      <div>
      {fields.map(field => (
        <label key={field.label}>
          {field.label}:
          {field.type === 'select' ? (
            <select value={field.value} onChange={field.onChange}>
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || 'text'}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        </label>
      ))}
      </div>

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
  )
}