import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  const fields = [
    {
      name: 'info',
      label: 'Model',
      type: 'text',
      value: 'gpt-4',
      onChange: () => {},
    },
  ];

  const handles = [
    { id: 'system', type: 'target', style: { top: `${100 / 3}%` } },
    { id: 'prompt', type: 'target', style: { top: `${200 / 3}%` } },
    { id: 'response', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="LLM"
      fields={fields}
      handles={handles}
    />
  );
};