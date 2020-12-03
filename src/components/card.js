import React from "react";
import styled from "styled-components";
import AddIcon from "mdi-react/AddIcon";
import CircleSmall from "mdi-react/CircleSmallIcon";
import ReactStars from "react-rating-stars-component";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";

const firstExample = {
  value: 4.5,
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

const Button = styled.div`
  padding: 4px 24px;
  background-color: #f9423a;
  color: #f1f1f2;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

function card() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow m-3">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
          alt="Display"
        />
        <div className="px-2 py-2 mt-1 mb-2">
          <div className="font-semibold text-md color-sonic-silver is-flex is-item-center">
            4.5{" "}
            <span>
              <ReactStars {...firstExample} classNames="mt-1 ml-1" />
            </span>
          </div>
          <p className="font-semibold color-charcoal text-lg mt-2">
            Roasted Chicked With Scrambled Egg
          </p>
          <small className="font-semibold text-md color-sonic-silver is-flex is-item-center mt-1">
            by Kulina
            <span>
              <CircleSmall />
            </span>
            Uptown Lunch
          </small>
          <ActionGroup className="mt-2">
            <p className="font-semibold color-charcoal text-xl">Rp 35,0000</p>
            <Button>
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

export default card;
