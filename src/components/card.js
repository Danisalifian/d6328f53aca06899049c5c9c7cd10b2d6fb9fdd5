import React from "react";
import styled from "styled-components";
import AddIcon from "mdi-react/AddIcon";
import CircleSmall from "mdi-react/CircleSmallIcon";
import ReactStars from "react-rating-stars-component";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { Button } from "./shared/button";
import { addToCart } from "../store/actions/productActions";
import { useDispatch } from "react-redux";

const starRates = {
  count: 5,
  edit: false,
  activeColor: "#a23530",
  isHalf: true,
  emptyIcon: <StarBorderRoundedIcon style={{ fontSize: "16px" }} />,
  halfIcon: <StarHalfRoundedIcon style={{ fontSize: "16px" }} />,
  filledIcon: <StarRoundedIcon style={{ fontSize: "16px" }} />,
};

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Card(props) {
  const dispatch = useDispatch();

  const addCart = () => {
    let Item = {
      id: props.product.id,
      price: props.product.price,
    };
    dispatch(addToCart(Item));
  };

  const formatNumber = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatRating = (num) => {
    return num.toFixed(1);
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow m-3">
        <img className="w-full" src={props.product.image} alt="Display" />
        <div className="px-2 py-2 mt-1 mb-2">
          <div className="font-semibold text-md color-sonic-silver is-flex is-item-center">
            {formatRating(props.product.rating)}
            <span>
              <ReactStars
                {...starRates}
                classNames="mt-1 ml-1"
                value={formatRating(props.product.rating)}
              />
            </span>
          </div>
          <p className="font-semibold color-charcoal text-lg mt-2">
            {props.product.productName}
          </p>
          <small className="font-semibold text-md color-sonic-silver is-flex is-item-center mt-1">
            by {props.product.publisher}
            <span>
              <CircleSmall />
            </span>
            {props.product.restaurantName}
          </small>
          <ActionGroup className="mt-2">
            <p className="font-semibold color-charcoal text-xl">
              Rp {formatNumber(props.product.price)}
            </p>
            <Button onClick={addCart}>
              ADD
              <span>
                <AddIcon className="ml-1" />
              </span>
            </Button>
          </ActionGroup>
        </div>
      </div>
    </div>
  );
}

export default Card;
