import { useState, useEffect } from 'react';

const Tabs = ({ tabs, defaultActive, children }) => {
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {
    setActiveTab(defaultActive);
  }, [defaultActive]);

  const changeActiveTab = (e) => {
    setActiveTab(e.target.name);
  };
  return (
    <div className="my-4 flex-nowrap overflow-x-auto overflow-y-hidden ">
      <div className="flex">
        {Object.values(tabs).map((tab, index) => {
          return (
            <button
              key={`${tab}_${index}`}
              name={tab}
              className={`flex flex-shrink-0 items-center border-b-4 px-5 py-2  hover:bg-blue-100 ${
                activeTab === tab
                  ? 'border-primary bg-blue-100 font-semibold'
                  : 'border-gray-300'
              }`}
              onClick={changeActiveTab}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="my-4 py-2">
        {children.find((child) => {
          return child.props?.name === activeTab;
        })}
      </div>
    </div>
  );
};

export default Tabs;
