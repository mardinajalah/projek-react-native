import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonSubmitPropsType {
  backgroundColor: string,
  color: string
  text: string
}

const ButtonSubmit = ({backgroundColor, color, text}: ButtonSubmitPropsType) => {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        padding: 15,
        borderRadius: 10,
        cursor: "pointer",
        marginTop: 10
      }}
    >
      <Text
        style={{
          color: color,
          fontSize: 15,
          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonSubmit;
