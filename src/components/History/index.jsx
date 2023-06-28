import React from 'react';
import {
  HistoryWrapper,
  HistoryText,
  HistoryTitle,
  HistoryDescription,
  HistoryImage,
} from './styles';

const historyImage = require('../../images/history.jpg');

const History = () => {
  return (
    <HistoryWrapper id="history">
      <HistoryText>
        <HistoryTitle>OUR HISTORY</HistoryTitle>
        <HistoryDescription>
          We are a photography group passionate about video games. We capture
          epic moments, cinematic scenes and stunning detail from the virtual
          worlds we explore. Our team is always looking for the best
          compositions, angles and lighting to create images that portray the
          artistic beauty and storytelling of games. We share our love of video
          games through photography, providing a unique and exciting vision of
          this digital universe. If you are also a gaming and photography
          enthusiast, join us to explore and immortalize virtual worlds in a
          creative and inspiring way.
        </HistoryDescription>
      </HistoryText>
      <HistoryImage>
        <img src={historyImage} alt="History" />
      </HistoryImage>
    </HistoryWrapper>
  );
};

export default History;
