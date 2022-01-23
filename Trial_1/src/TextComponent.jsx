import React from 'react';
import TextBox from './TextBox.jsx';

const TextComponent = (props) => {
  return props.someText.map((currentItem, i) => {
    <TextBox text={props.someText.currentItem} func={props.alertWindow} />;
  });
};

export default TextComponent;
