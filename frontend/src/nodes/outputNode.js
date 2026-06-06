import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const fields = [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      value: currName,
      onChange: (e) => setCurrName(e.target.value),
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      value: outputType,
      onChange: (e) => setOutputType(e.target.value),
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' },
      ],
    },
  ];

  const handles = [
    { id: 'value', type: 'target' },
  ];

  return (
    <BaseNode
      id={id}
      title="Output"
      fields={fields}
      handles={handles}
    />
  );
};