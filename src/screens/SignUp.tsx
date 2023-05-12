import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base"
import BackgroundImg from '@assets/background.png'

import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {

const navigation = useNavigation();

function handleGoBack(){
    navigation.goBack();
}

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <VStack flex={1}  px={10} pb={16}>

                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas Treinando"
                    resizeMode="contain"
                    position='absolute'
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm" >
                        Treine sua Mente e o seu Corpo
                    </Text>

                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
                        Crie sua conta
                    </Heading>

                    <Input
                        placeholder="Nome"

                    />

                    <Input
                        placeholder="Email"

                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry

                    />

                    <Button
                        title="Criar e Acessar"
                    />

                </Center>

                <Center>

                    <Button
                        title="Volta para Login" variant="outline"
                        mt={24}//mt = MarginTop
                        onPress={handleGoBack}
                    />

                </Center>

            </VStack>
        </ScrollView>

    );

}