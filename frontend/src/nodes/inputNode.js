import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const fields = [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      value: currName,
      onChange: (e) => setCurrName(e.target.value),
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      value: inputType,
      onChange: (e) => setInputType(e.target.value),
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' },
      ],
    },
  ];

  const handles = [
    { id: 'value', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="Input"
      fields={fields}
      handles={handles}
    />
  );
};