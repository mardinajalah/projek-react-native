import { loginSchema, registerSchema } from "@/lib/zod";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import ButtonSubmit from "../items/ButtonSubmit";
import InputLogin from "../layouts/InputLogin";
import InputRegister from "../layouts/InputRegister";

interface AuthPropsTypes {
  title: string;
  textButton: string;
  children: React.ReactNode;
}

interface DataInputLoginType {
  name: string;
  password: string;
}

interface DataInputRegisterType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Auth = ({ title, textButton, children }: AuthPropsTypes) => {
  const [loginError, setLoginError] = useState<{
    name?: string;
    password?: string;
  }>({});

  const [registerError, setRegisterError] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const [valueLogin, setValueLogin] = useState<DataInputLoginType>({
    name: "",
    password: "",
  });

  const [valueRegister, setValueRegister] = useState<DataInputRegisterType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onClick = () => {
    if (title === "login") {
      const result = loginSchema.safeParse(valueLogin);

      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setLoginError(fieldErrors);
        return;
      }

      setLoginError({});
      console.log("Login data:", valueLogin);
      setValueLogin({ name: "", password: "" });
    } else {
      const result = registerSchema.safeParse(valueRegister);

      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0]] = err.message;
        });
        setRegisterError(fieldErrors);
        return;
      }

      setRegisterError({});
      console.log("Register data:", valueRegister);
      setValueRegister({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // bisa disesuaikan dengan header/navigation
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              color: "blue",
              fontSize: 30,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Text>
          <View
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            {title === "login" ? (
              <InputLogin
                targetName={valueLogin.name}
                targetPassord={valueLogin.password}
                onTargetName={(text: string) => {
                  setValueLogin((prev) => ({ ...prev, name: text }));
                  setLoginError((prev) => ({ ...prev, name: undefined })); // reset error saat input
                }}
                onTargetPasseord={(text: string) => {
                  setValueLogin((prev) => ({ ...prev, password: text }));
                  setLoginError((prev) => ({ ...prev, password: undefined }));
                }}
                errorName={loginError.name}
                errorPassword={loginError.password}
              />
            ) : (
              <InputRegister
                targetName={valueRegister.name}
                targetEmail={valueRegister.email}
                targetPassword={valueRegister.password}
                targetConfirmPassword={valueRegister.confirmPassword}
                onTargetName={(text: string) => {
                  setValueRegister((prev) => ({ ...prev, name: text }));
                  setRegisterError((prev) => ({ ...prev, name: undefined }));
                }}
                onTargetEmail={(text: string) => {
                  setValueRegister((prev) => ({ ...prev, email: text }));
                  setRegisterError((prev) => ({ ...prev, email: undefined }));
                }}
                onTargetPassword={(text: string) => {
                  setValueRegister((prev) => ({ ...prev, password: text }));
                  setRegisterError((prev) => ({
                    ...prev,
                    password: undefined,
                  }));
                }}
                onTargetConfirmPassword={(text: string) => {
                  setValueRegister((prev) => ({
                    ...prev,
                    confirmPassword: text,
                  }));
                  setRegisterError((prev) => ({
                    ...prev,
                    confirmPassword: undefined,
                  }));
                }}
                errorName={registerError.name}
                errorEmail={registerError.email}
                errorPassword={registerError.password}
                errorConfirmPassword={registerError.confirmPassword}
              />
            )}
            <ButtonSubmit
              backgroundColor="blue"
              color="white"
              text={textButton}
              handleClick={onClick}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Text>
              {title === "login"
                ? "Belum Punya Akun Daftar"
                : "Udah Punya Akun Masuk"}
            </Text>
            {children}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Auth;
