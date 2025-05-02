import { Pressable, Text, View } from "react-native";
import ButtonSubmit from "../items/ButtonSubmit";
import InputLogin from "../layouts/InputLogin";
import InputRegister from "../layouts/InputRegister";

interface AuthPropsTypes {
  title: string
  textButton: string
  children: React.ReactNode
}

const Auth = ({title, textButton, children}: AuthPropsTypes) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'blue',
          fontSize: 30,
          fontWeight: 'bold',
          textTransform: "capitalize"
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {title === "login"? (<InputLogin/>) : (<InputRegister/>)}
        <ButtonSubmit
          backgroundColor='blue'
          color='white'
          text={textButton}
        />
      </View>
      <View 
        style={{
          flexDirection: "row",
          gap: 5,
          marginTop: 10
        }}
      >
        <Text>{title === "login"? "belum punya akaun daftar" : "udah punya akaun masuk"}</Text>
        {children}
      </View>
    </View>
  )
};

export default Auth;
