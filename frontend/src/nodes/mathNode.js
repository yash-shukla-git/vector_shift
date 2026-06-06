import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const fields = [
    {
      name: 'operation',
      label: 'Op',
      type: 'select',
      value: operation,
      onChange: (e) => setOperation(e.target.value),
      options: [
        { value: 'add', label: 'Add' },
        { value: 'subtract', label: 'Subtract' },
        { value: 'multiply', label: 'Multiply' },
        { value: 'divide', label: 'Divide' },
      ],
    },
  ];

  const handles = [
    { id: 'a', type: 'target', style: { top: '33%' } },
    { id: 'b', type: 'target', style: { top: '66%' } },
    { id: 'result', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="Math"
      fields={fields}
      handles={handles}
    />
  );
};