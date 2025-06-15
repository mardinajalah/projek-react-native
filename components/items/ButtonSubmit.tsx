import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonSubmitPropsType {
  backgroundColor: string;
  color: string;
  text: string;
  handleClick: () => void;
}

const ButtonSubmit = ({
  backgroundColor,
  color,
  text,
  handleClick,
}: ButtonSubmitPropsType) => {
  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        padding: 15,
        borderRadius: 10,
        cursor: "pointer",
        marginTop: 10,
      }}
      onPress={handleClick}
    >
      <Text
        style={{
          color: color,
          fontSize: 15,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonSubmit;
