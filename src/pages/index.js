import React, { useState } from "react";
import Card from "../components/card";
import { Tabs, Tab, Content } from "../components/shared/tabs";

function App() {
  const [active, setActive] = useState(0);
  const handleTabs = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div>
      <div className="ml-3 mr-3 mt-2">
        <Tabs>
          <Tab onClick={handleTabs} active={active === 0} id={0}>
            Lunch
          </Tab>
          <Tab onClick={handleTabs} active={active === 1} id={1}>
            Dinner
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <Card />
          </Content>
          <Content active={active === 1}>
            <Card />
            <Card />
            <Card />
          </Content>
        </>
      </div>
    </div>
  );
}

export default App;
