import { Text, View } from "react-native";
import Inputan from "../items/Inputan";

interface InputRegisterPropsType {
  targetName: string;
  targetEmail: string;
  targetPassword: string;
  targetConfirmPassword: string;
  onTargetName: (e: string) => void;
  onTargetEmail: (e: string) => void;
  onTargetPassword: (e: string) => void;
  onTargetConfirmPassword: (e: string) => void;
  errorName?: string;
  errorEmail?: string;
  errorPassword?: string;
  errorConfirmPassword?: string;
}

const InputRegister = ({
  targetName,
  targetEmail,
  targetPassword,
  targetConfirmPassword,
  onTargetName,
  onTargetEmail,
  onTargetPassword,
  onTargetConfirmPassword,
  errorName,
  errorEmail,
  errorPassword,
  errorConfirmPassword,
}: InputRegisterPropsType) => {
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
        placeholder="masukan emal...."
        value={targetEmail}
        onChange={onTargetEmail}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          email
        </Text>
      </Inputan>
      {errorEmail && <Text style={{ color: "red" }}>{errorEmail}</Text>}

      <Inputan
        placeholder="masukan password...."
        value={targetPassword}
        onChange={onTargetPassword}
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

      <Inputan
        placeholder="konfirmasi password...."
        value={targetConfirmPassword}
        onChange={onTargetConfirmPassword}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          konfirmasi
        </Text>
      </Inputan>
      {errorConfirmPassword && (
        <Text style={{ color: "red" }}>{errorConfirmPassword}</Text>
      )}
    </View>
  );
};

export default InputRegister;
