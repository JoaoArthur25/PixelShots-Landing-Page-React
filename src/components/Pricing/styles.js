import styled from 'styled-components';

export const PricingSection = styled.section`
  background-color: #fff;
  padding: 50px;
  background-color: ${(props) => props.theme.secondaryBody};
`;

export const PricingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PricingText = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const PricingTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.fontColor};
`;

export const ResponsiveTable = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  margin-top: 20px;
  color: ${(props) => props.theme.fontColor};
  
    @media screen and (max-width: 600px) {
        min-width: 10px;
    }
`;

export const TableHeader = styled.th`
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-width: 3px;
  font-weight: bold;
  font-size: 18px;
`;

export const TableCell = styled.td`
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.fontColor};
  font-weight: bold;
  border-width: 3px; 
  font-size: 18px;
`;

export const TableLink = styled.a`
  text-decoration: none;
  color: plum;

  &:hover {
    text-decoration: underline;
  }
`;
