import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
const MIN_WIDTH = 230;
const MIN_HEIGHT = 80;
const CHAR_WIDTH = 8;
const LINE_HEIGHT = 20;
const PADDING = 40;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: MIN_WIDTH, height: MIN_HEIGHT });
  const textareaRef = useRef(null);

  useEffect(() => {
    // Extract valid variable names from {{...}} patterns
    const found = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VARIABLE_REGEX.source, 'g');
    while ((match = regex.exec(currText)) !== null) {
      const varName = match[1];
      if (!seen.has(varName)) {
        seen.add(varName);
        found.push(varName);
      }
    }
    setVariables(found);

    // Compute new width based on longest line
    const lines = currText.split('\n');
    const longestLine = Math.max(...lines.map(l => l.length));
    const newWidth = Math.max(MIN_WIDTH, longestLine * CHAR_WIDTH + PADDING);

    // Compute new height based on number of lines
    const newHeight = Math.max(MIN_HEIGHT, lines.length * LINE_HEIGHT + PADDING);

    setNodeSize({ width: newWidth, height: newHeight });
  }, [currText]);

  // Auto-grow textarea height to match content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const fields = [
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
      value: currText,
      rows: 3,
      onChange: (e) => setCurrText(e.target.value),
      ref: textareaRef,
    },
  ];

  // One target handle per unique variable, evenly spaced
  const variableHandles = variables.map((varName, index) => ({
    id: varName,
    type: 'target',
    style: {
      top: `${((index + 1) / (variables.length + 1)) * 100}%`,
    },
  }));

  const handles = [
    ...variableHandles,
    { id: 'output', type: 'source' },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      fields={fields}
      handles={handles}
      style={{ width: nodeSize.width }}
    />
  );
};