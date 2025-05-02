import { View, TextInput } from "react-native";

interface InputanPropsType {
  children?: React.ReactNode,
  placeholder: string
}

const Inputan = ({children, placeholder}: InputanPropsType) => {
  return (
    <View style={{
      marginTop: 10
    }}>
      {children}
      <TextInput
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 5,
          fontSize: 20,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Inputan;
