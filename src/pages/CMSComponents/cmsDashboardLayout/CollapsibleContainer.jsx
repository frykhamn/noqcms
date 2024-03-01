import { useState } from 'react';
import PropTypes from 'prop-types';

// CollapsibleContainer is a component that is used to display anything in a collapsible container.

const CollapsibleContainer = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto my-8">
      <div
        className="flex items-center justify-between cursor-pointer bg-gray-200 p-4 rounded-md mb-4"
        onClick={handleToggleExpand}
      >
        <h1 className="text-3xl font-bold">{title}</h1>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && <div>{children}</div>}
    </div>
  );
};
CollapsibleContainer.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a required string
  children: PropTypes.node.isRequired, // Ensure children can be any type of React node
};

export default CollapsibleContainer;
