import React from "react";
import { Text, View } from "react-native";
import Inputan from "../items/Inputan";

interface InputLoginPropsType {
  targetName: string;
  targetPassord: string;
  onTargetName: (e: string) => void;
  onTargetPasseord: (e: string) => void;
  errorName?: string;
  errorPassword?: string;
}

const InputLogin = ({
  targetName,
  onTargetName,
  targetPassord,
  onTargetPasseord,
  errorName,
  errorPassword,
}: InputLoginPropsType) => {
  return (
    <View>
      <Inputan
        placeholder="masukan nama...."
        value={targetName}
        onChange={onTargetName}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          nama
        </Text>
      </Inputan>
      {errorName && <Text style={{ color: "red" }}>{errorName}</Text>}

      <Inputan
        placeholder="masukan password...."
        value={targetPassord}
        onChange={onTargetPasseord}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          password
        </Text>
      </Inputan>
      {errorPassword && <Text style={{ color: "red" }}>{errorPassword}</Text>}
    </View>
  );
};

export default InputLogin;
