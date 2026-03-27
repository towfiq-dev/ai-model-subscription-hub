import React, { useState } from 'react';

const Tabs = () => {
  const [clicked, setClicked] = useState(false)
  return (
  <div role="tablist" className="tabs tabs-box justify-center py-2 mb-6 gap-2 max-w-310 mx-auto">
  <button onClick={()=>setClicked(true)} role="tab" className={`tab btn border ${clicked === true? "bg-green-500": ''}`}>Tab 1</button>
  <button onClick={()=>setClicked(false)} role="tab" className={`tab btn border ${clicked === false? "bg-green-500": ''}`}>Tab 2</button>
</div>
  );
};

export default Tabs;