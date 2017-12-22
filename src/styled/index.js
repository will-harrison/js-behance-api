import styled from 'styled-components';

export const Loading = styled.div`
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div.attrs({ className: "f3" }) `
  padding-top: 40px;
  padding-left: 15px;
`;


export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;