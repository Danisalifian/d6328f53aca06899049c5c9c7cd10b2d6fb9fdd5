import React, { useState } from "react";
import Card from "../components/card";
import { Tabs, Tab, Content } from "../components/shared/tabs";
import { TopBar } from "../components/shared/topbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

function App() {
  const [active, setActive] = useState(0);
  const trigger = useScrollTrigger();

  const handleTabs = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <div>
      <div>
        <Slide appear={false} direction="down" in={!trigger}>
          <TopBar className="px-3">
            <Tabs>
              <Tab onClick={handleTabs} active={active === 0} id={0}>
                Lunch
              </Tab>
              <Tab onClick={handleTabs} active={active === 1} id={1}>
                Dinner
              </Tab>
            </Tabs>
          </TopBar>
        </Slide>
        <div className="container" style={{ marginTop: "48px" }}>
          <Content active={active === 0}>
            <div>
              <Card />
            </div>
          </Content>
          <Content active={active === 1}>
            <div>
              <Card />
              <Card />
              <Card />
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
}

export default App;
