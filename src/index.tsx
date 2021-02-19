import React from 'react';
import { Virtuoso } from 'react-virtuoso';

interface TreeProps {
  test: string;
}

export const Tree: React.FC<TreeProps> = ({ test }) => {
  return (
    <div>
      {test}
      <Virtuoso />
    </div>
  );
};
