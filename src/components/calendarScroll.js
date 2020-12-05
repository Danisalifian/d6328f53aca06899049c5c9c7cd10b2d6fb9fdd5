import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getLocalDate } from "../store/actions/productActions";

const CalendarWrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const CalendarItem = styled.div`
  display: inline-grid;
  background-color: ${(props) => (props.active ? "#424749" : "#fff")};
  cursor: pointer;
  margin: 4px 4px;
  color: ${(props) => (props.active ? "#fff" : "#424749")};
  text-align: center;
  padding: 14px;
  border-radius: 50%;
  align-items: center;
  width: 56px;
  height: 56px;
  font-weight: 700;
  :hover {
    background-color: #424749;
    color: #fff;
  }
`;

const DayName = styled.div`
  font-size: 8px;
  font-weight: 600;
`;

function CalendarScroll() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const dates = useSelector((state) => state.product.dates);

  const handleSelected = (e) => {
    console.log(e.target.id);
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const threeCharDay = (val) => {
    return val.substring(0, 3);
  };

  let DateArray = !loading
    ? dates.map((date) => {
        return (
          <CalendarItem
            key={date.id}
            onClick={handleSelected}
            active={active === date.id}
            id={date.id}>
            <DayName
              onClick={handleSelected}
              active={active === date.id}
              id={date.id}>
              {threeCharDay(date.day)}
            </DayName>
            {date.date}
          </CalendarItem>
        );
      })
    : "";

  useEffect(() => {
    dispatch(getLocalDate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "contents" }}>
      <CalendarWrapper className="is-content-center">
        {/* <CalendarItem onClick={handleSelected} active={active === 0} id={0}>
          <DayName onClick={handleSelected} active={active === 0} id={0}>
            SEN
          </DayName>
          12
        </CalendarItem>
        <CalendarItem onClick={handleSelected} active={active === 1} id={1}>
          <DayName onClick={handleSelected} active={active === 1} id={1}>
            SEL
          </DayName>
          13
        </CalendarItem> */}
        {DateArray}
      </CalendarWrapper>
    </div>
  );
}

export default CalendarScroll;
