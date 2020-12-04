import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { Tabs, Tab, Content } from "../components/shared/tabs";
import { TopBar } from "../components/shared/topbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const trigger = useScrollTrigger();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const handleTabs = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  let listingProduct = !loading ? (
    products.map((product) => {
      return (
        <div key={product.id}>
          <Card product={product} />
        </div>
      );
    })
  ) : (
    <div style={{ textAlign: "center" }}>
      <CircularProgress color="secondary" />
    </div>
  );

  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Toolbar />
        <div className="container">
          <h1 className="text-xl font-bold color-charcoal px-3 mt-1">
            Kamis. 13 Maret 2019
          </h1>
          <Content active={active === 0}>
            <div>{listingProduct}</div>
          </Content>
          <Content active={active === 1}>
            <div style={{ textAlign: "center" }}>
              <CircularProgress color="secondary" />
            </div>
          </Content>
        </div>
      </div>
    </div>
  );
}

export default App;
