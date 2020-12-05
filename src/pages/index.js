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
import CartFloating from "../components/cartFloating";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const trigger = useScrollTrigger();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const items = useSelector((state) => state.product.cart);
  const dateTime = useSelector((state) => state.product.dateTime);

  const handleTabs = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  let ProductLunch = !loading ? (
    products
      .filter((product) => product.foodtype === "Lunch")
      .map((product) => {
        return (
          <div key={product.id}>
            <Card product={product} />
          </div>
        );
      })
  ) : (
    <div style={{ textAlign: "center" }}>
      <CircularProgress style={{ color: "#a23530" }} />
    </div>
  );

  let ProductDinner = !loading ? (
    products
      .filter((product) => product.foodtype === "Dinner")
      .map((product) => {
        return (
          <div key={product.id}>
            <Card product={product} />
          </div>
        );
      })
  ) : (
    <div style={{ textAlign: "center" }}>
      <CircularProgress style={{ color: "#a23530" }} />
    </div>
  );

  let Cart = items.length !== 0 ? <CartFloating /> : "";

  const upperFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  let DateView = !loading ? (
    <h1 className="text-xl font-bold color-charcoal px-3 mt-1">
      {upperFirstChar(dateTime.day)}. {dateTime.date} {dateTime.month}{" "}
      {dateTime.year}
    </h1>
  ) : (
    ""
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
            <Tabs className="mt-2">
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
          {DateView}
          <Content active={active === 0}>
            <div>{ProductLunch}</div>
          </Content>
          <Content active={active === 1}>
            <div>{ProductDinner}</div>
          </Content>
        </div>
        {Cart}
      </div>
    </div>
  );
}

export default App;
