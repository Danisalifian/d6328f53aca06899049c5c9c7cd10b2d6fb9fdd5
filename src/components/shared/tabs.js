import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Tab = styled.div`
  cursor: pointer;
  width: 50%;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => (props.active ? "#424749" : "#f1f1f2")};
  color: ${(props) => (props.active ? "#f1f1f2" : "#e2e4e4")};
  padding: 4px 8px;

  :hover {
    background-color: #6e7679;
    color: #f1f1f2;
  }
`;
export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
