import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
  align-items: center;
  //m-t m-b影响垂直居中 为什么
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`;
