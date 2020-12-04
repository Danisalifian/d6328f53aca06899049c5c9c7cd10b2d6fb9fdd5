import styled from "styled-components";
export const Tabs = styled.ul`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Tab = styled.li`
  cursor: pointer;
  width: 50%;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => (props.active ? "#424749" : "#f1f1f2")};
  color: ${(props) => (props.active ? "#f1f1f2" : "rgb(66, 71, 73, .5)")};
  padding: 4px 8px;

  :hover {
    border: ${(props) => (props.active ? "" : "1px solid #424749 !important")};
    color: ${(props) => (props.active ? "" : "#424749")};
  }

  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid rgb(66, 71, 73, 0.1);
  }

  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid rgb(66, 71, 73, 0.1);
  }
`;
export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
