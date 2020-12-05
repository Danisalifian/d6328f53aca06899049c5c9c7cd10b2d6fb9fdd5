import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";
import Slide from "@material-ui/core/Slide";

export const CartWrapper = styled.div`
  height: auto;
  width:100%;
  position fixed;
  bottom: 8px;
`;

export const Cart = styled.div`
  height: 68px;
  width: 100%;
  margin: 0 auto;
  background-color: #a23530;
  display: flex;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export default function CartFloating() {
  const items = useSelector((state) => state.product.cart);

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

  return (
    <div>
      <Slide direction="up" in={true}>
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
      </Slide>
    </div>
  );
}
