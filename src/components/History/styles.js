import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  background-color: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryBody};

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const HistoryText = styled.div`
  max-width: 500px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 1000px) {
    margin-right: 30px;
    text-align: left;
  }
`;

export const HistoryTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColor};
`;

export const HistoryDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  color: ${(props) => props.theme.secondaryFontColor};
  margin-bottom: 30px;
`;

export const HistoryImage = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 2.0);

  img {
    width: 100%;
  }

  @media screen and (min-width: 1000px) {
    width: 40%;
    margin-bottom: 0;
  }
`;
