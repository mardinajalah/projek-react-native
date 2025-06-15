import { View, TextInput } from "react-native";

interface InputanPropsType {
  children?: React.ReactNode,
  placeholder: string
  value: string,
  onChange: (e: string) => void
}

const Inputan = ({children, placeholder, value, onChange}: InputanPropsType) => {
  return (
    <View style={{
      marginTop: 10
    }}>
      {children}
      <TextInput
        value={value}
        onChangeText={onChange}
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
