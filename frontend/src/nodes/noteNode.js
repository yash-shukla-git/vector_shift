import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  const fields = [
    {
      name: 'note',
      label: 'Note',
      type: 'text',
      value: note,
      placeholder: 'Add a note...',
      onChange: (e) => setNote(e.target.value),
    },
  ];

  const handles = [];

  return (
    <BaseNode
      id={id}
      title="Note"
      fields={fields}
      handles={handles}
    />
  );
};