import React from 'react';

import './RenderCount.css';

const RenderCount = () => {
  const renderCount = React.useRef(1);

  React.useEffect(() => {
    renderCount.current += 1;
  });

  return <div className="render-count">{renderCount.current}</div>;
};

export default RenderCount;
