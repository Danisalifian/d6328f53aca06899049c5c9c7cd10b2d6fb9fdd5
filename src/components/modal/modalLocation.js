import styled from "styled-components";

export const ModalLocationWrapper = styled.div`
  height: 85vh;
  overflow: hidden;
  width: 100%;
`;

export const InputLocation = styled.input`
  font-size: 18px;
  padding: 10px;
  padding-left: 40px;
  border: 2px solid rgb(66, 71, 73, 0.4);
  border-radius: 4px;
  width: 100%;
  transition: 0.3s;
  font-weight: 600;
  color: #424749;
  ::placeholder {
    color: rgb(66, 71, 73, 0.7);
  }
  :focus {
    outline: none;
    border: 2px solid rgb(66, 71, 73, 0.9);
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  margin-top: 12px;
  margin-left: 8px;
  color: #f9423a;
`;
