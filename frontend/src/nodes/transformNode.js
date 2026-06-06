import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transform, setTransform] = useState(data?.transform || 'uppercase');

  const fields = [
    {
      name: 'transform',
      label: 'Type',
      type: 'select',
      value: transform,
      onChange: (e) => setTransform(e.target.value),
      options: [
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' },
        { value: 'trim', label: 'Trim' },
        { value: 'reverse', label: 'Reverse' },
        { value: 'parse_json', label: 'Parse JSON' },
      ],
    },
  ];

  const handles = [
    { id: 'input', type: 'target' },
    { id: 'output', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="Transform"
      fields={fields}
      handles={handles}
    />
  );
};