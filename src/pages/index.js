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
import { Cart, CartWrapper } from "../components/cart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const trigger = useScrollTrigger();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const items = useSelector((state) => state.product.cart);

  const handleTabs = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const sumCart = (items) => {
    let sum = 0;
    items.map((item) => {
      sum += item.price;
      return sum;
    });

    return sum;
  };

  const formatNumber = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          <h1 className="text-xl font-bold color-charcoal px-3 mt-1">
            Kamis. 13 Maret 2019
          </h1>
          <Content active={active === 0}>
            <div>{listingProduct}</div>
          </Content>
          <Content active={active === 1}>
            <div style={{ textAlign: "center" }}>
              <CircularProgress style={{ color: "#a23530" }} />
            </div>
          </Content>
        </div>
        <CartWrapper className="px-2 ">
          <Cart style={{ justifyContent: "space-between" }}>
            <div className="px-2 py-2 ml-2">
              <h2 className="font-bold text-xl">
                {items.length} Items | Rp {formatNumber(sumCart(items))}
              </h2>
              <h3 className="mt-1">Termasuk ongkos kirim</h3>
            </div>
            <div className="px-2 py-3">
              <ShoppingCartIcon className=" color-cultured" fontSize="large" />
              <ArrowForwardIosIcon
                className=" color-cultured"
                fontSize="large"
              />
            </div>
          </Cart>
        </CartWrapper>
      </div>
    </div>
  );
}

export default App;
