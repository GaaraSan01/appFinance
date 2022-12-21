import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: var(--verde);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.719);
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;