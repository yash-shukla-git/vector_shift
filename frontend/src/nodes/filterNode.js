import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [operator, setOperator] = useState(data?.operator || 'equals');

  const fields = [
    {
      name: 'condition',
      label: 'Value',
      type: 'text',
      value: condition,
      onChange: (e) => setCondition(e.target.value),
    },
    {
      name: 'operator',
      label: 'Op',
      type: 'select',
      value: operator,
      onChange: (e) => setOperator(e.target.value),
      options: [
        { value: 'equals', label: 'Equals' },
        { value: 'contains', label: 'Contains' },
        { value: 'greater', label: 'Greater Than' },
        { value: 'less', label: 'Less Than' },
      ],
    },
  ];

  const handles = [
    { id: 'input', type: 'target' },
    { id: 'true', type: 'source', style: { top: '33%' } },
    { id: 'false', type: 'source', style: { top: '66%' } },
  ];

  return (
    <BaseNode
      id={id}
      title="Filter"
      fields={fields}
      handles={handles}
    />
  );
};