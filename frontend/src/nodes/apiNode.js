import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  const fields = [
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      value: url,
      onChange: (e) => setUrl(e.target.value),
    },
    {
      name: 'method',
      label: 'Method',
      type: 'select',
      value: method,
      onChange: (e) => setMethod(e.target.value),
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' },
      ],
    },
  ];

  const handles = [
    { id: 'body', type: 'target', style: { top: `${100 / 3}%` } },
    { id: 'headers', type: 'target', style: { top: `${200 / 3}%` } },
    { id: 'response', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="API"
      fields={fields}
      handles={handles}
    />
  );
};