import { Text, View } from "react-native";
import Inputan from "../items/Inputan";

const InputRegister = () => {
  return (
    <View>
      <Inputan placeholder='masukan nama....'>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          nama
        </Text>
      </Inputan>
      <Inputan placeholder='masukan emal....'>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          email
        </Text>
      </Inputan>
      <Inputan placeholder='masukan password....'>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          password
        </Text>
      </Inputan>
      <Inputan placeholder='konfirmasi password....'>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          konfirmasi
        </Text>
      </Inputan>
    </View>
  )
};

export default InputRegister;
