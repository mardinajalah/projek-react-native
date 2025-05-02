import Auth from '@/components/auth';
import { Pressable, Text } from 'react-native';
import { useState } from "react"

export default function Index() {
  const [masuk, setMasuk] = useState<string>("login")
  const handleMasuk = (masuk: string) => {
    if(masuk === "login") {
      setMasuk("register")
    }else {
      setMasuk("login")
    }
  }
  
  return (
    <Auth
      textButton='submit'
      title={masuk}
    >
      <Pressable onPress={() => handleMasuk(masuk)}>
        <Text
          style={{
            color: 'blue',
          }}
        >
          Disini
        </Text>
      </Pressable>
    </Auth>
  );
}
