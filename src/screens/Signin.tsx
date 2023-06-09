import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base"
import BackgroundImg from '@assets/background.png'
import { useNavigation } from "@react-navigation/native";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn(){

    const navigation = useNavigation< AuthNavigationRoutesProps>();

    function handleNewAccount(){
        navigation.navigate('signUp')
    }

return(
    <ScrollView contentContainerStyle={{flexGrow:1}}>  
<VStack flex={1}  px={10} pb={16}>

    <Image
    source={BackgroundImg}
    defaultSource={BackgroundImg}
    alt="Pessoas Treinando"
    resizeMode="contain"
    position='absolute'
    />

<Center my={24}>
<LogoSvg/>

<Text color="gray.100" fontSize="sm" >
    Treine sua Mente e o seu Corpo
</Text>

</Center>

<Center>
<Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
Acesse sua conta
</Heading>

<Input borderColor='green.700' borderWidth={1}
 placeholder="E-mail"
keyboardType="email-address"
autoCapitalize="none"

/>


<Input borderColor='green.700' borderWidth={1}
  placeholder="Senha" 
  secureTextEntry


/>
<Button
title="Acessar"
/>

</Center>

<Center mt={24}> //mt = MarginTop
<Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
    Ainda não tem acesso?
</Text>


<Button
title="Criar Conta" variant="outline"
onPress={handleNewAccount}

/>

</Center>

</VStack>
</ScrollView>

);

}