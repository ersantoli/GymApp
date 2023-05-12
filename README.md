Iniciando aplicação:   npx create-expo-app igniteGym –template
instalando babel:  npm install  -–save-dev babel-plugin-module-resolver
Mapear as pastas
instalando plugin dentro do babel.config.js: 
<img width="248" alt="babel config" src="https://github.com/ersantoli/GymApp/assets/74686375/e280140b-a227-4438-b75e-43eaa59daac6">


Configurando tsconfig.json:

<img width="235" alt="tsconfi json" src="https://github.com/ersantoli/GymApp/assets/74686375/207ac4c5-28fe-4b58-b455-015bf6c7e264">

 
Instalando as fontes: npx expo install expo-font @expo-google-fonts/roboto
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

imagem do App.tsx:


 <img width="401" alt="app tsx" src="https://github.com/ersantoli/GymApp/assets/74686375/7bb7fd37-a03a-4a36-8825-93414ca3499e">


Criar a pasta src e incluir os assets

Usando o native base
Link docs: https://nativebase.io/
Instalação de bibliotecas
native base: Npm install native-base
react native svg: expo install react-native-svg@12.1.1
react native safe area content: expo install react-native-safe-area-context@3.3.2
native base provider: <NativeBaseProvider><NativeBaseProvider/>
 
return (
<NativeBaseProvider>
<StatusBar
barStyle="light-content"
backgroundColor='transparent'
translucent />

{fontsLoaded ? <View/>: <View/>}

</NativeBaseProvider>
);

Criando um component Load

Criar uma pasta components dentro da pasta src
 
  <img width="130" alt="Load" src="https://github.com/ersantoli/GymApp/assets/74686375/e5ab72d8-f976-47b9-8954-ae8ba72ff77b">
 
Dentro do Load.tsx:
import {Spinner, Center} from 'native-base'

export function Load(){

return(
<Center>
<Spinner/>
</Center>
)
}

Agora carregar esse componente dentro do app.tsx
 
{fontsLoaded ? <View/>: <Load/>}
Criando pasta para o tema da aplicação:
 
Dentro do src criar uma pasta theme/index.ts
 
 
 <img width="129" alt="index ts" src="https://github.com/ersantoli/GymApp/assets/74686375/23b72faa-c428-4188-8d01-b9ee2f61fb05">

 
Conteudo do index:
import { extendTheme } from 'native-base';

export const THEME = extendTheme({
colors: {
green: {
700: '#00875F',
500: '#00B37E',
},
gray: {
700: '#121214',
600: '#202024',
500: '#29292E',
400: '#323238',
300: '#7C7C8A',
200: '#C4C4CC',
100: '#E1E1E6'
},
white: '#FFFFFF',
red: {
500: '#F75A68'
}
},
fonts: {
heading: 'Roboto_700Bold',
body: 'Roboto_400Regular',
},
fontSizes: {
xs: 12,
sm: 14,
md: 16,
lg: 18,
xl: 20,
},
sizes: {
14: 56,
33: 148
}
});
 
Ultilizando nos components:
 
App.tsx
return (
<NativeBaseProvider theme={THEME}>
Dentro do Load
export function Load(){
return(
<Center flex={1} bg="gray.700">
<Spinner color="green.500"/>
</Center>

)

Criando a tela de Login
 
Criar pasta de Screens dentro da src, criar aquivo Signin.tsx:
 
 <img width="92" alt="Signin tsx" src="https://github.com/ersantoli/GymApp/assets/74686375/ab6a62a3-e40c-4bfa-9c61-d3b7c9952266">

 
Conteudo do SignIn.tsx:
import { VStack, Image } from "native-base"
import BackgroundImg from '@assets/background.png'

export function SignIn(){
return(
<VStack flex={1} bg="gray.700">
<Image
source={BackgroundImg}
alt="Pessoas Treinando"
resizeMode="contain"
position='absolute'
/>
</VStack>
);
}

Icones em SVG:
Por padrao o react native nao exibe svg, por isso vamos instalar o react native svg transformer:
Npm i react-native-svg-transformer -–save-dev
Apos isso criar o metro.config.js
 
 
 <img width="101" alt="metro config js" src="https://github.com/ersantoli/GymApp/assets/74686375/31f0f5ff-a4b0-4cfa-b157-9c3ffad63221">

Conteudo do arquivo:
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
...transformer,
babelTransformerPath: require.resolve("react-native-svg-transformer"),
};
config.resolver = {
...resolver,
assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
sourceExts: [...resolver.sourceExts, "svg"],
};

return config;
})();

Criar uma pasta Type para a aplicação reconhecer os formatos das  
imagens png e svg,dentro dessa pasta criar os arquivos
 
 
 <img width="113" alt="pasta type" src="https://github.com/ersantoli/GymApp/assets/74686375/16249caa-0a8a-49c5-92d9-8449855ca1bf">


 
Dentro do png.d.ts
declare module "*.svg";

 
dentro do svg.d.ts:
 
declare module "*.svg" {
import React from 'react';
import { SvgProps } from "react-native-svg";
const content: React.FC<SvgProps>;
export default content;
}

Criando o input dentro da pasta components:
 
Conteudo do Imput
 <img width="111" alt="Input" src="https://github.com/ersantoli/GymApp/assets/74686375/b7ddb527-3742-4490-bfdc-8f416be28793">

import { Input as NativeBaseInput,IInputProps } from "native-base";

export function Input( {...rest}: IInputProps ){

return(
<NativeBaseInput
bg="gray.700"
h={14}
px={4}
borderWidth={0}
fontSize="md"
color="white"
fontFamily="body"
mb={4}
placeholderTextColor="gray.300"
{...rest}  //sempre deve ser o ultimo      />

);

}
Importar o input dentro do SignIn:
<Center>
<Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
Acesse sua conta
</Heading>

<Input  placeholder="E-mail"
keyboardType="email-address"
autoCapitalize="none"
/>
<Input   placeholder="Senha" secureTextEntry />

</Center>

Criando o componente button dentro da pasta components:
import {Button as ButtonNativeBase, IButtonProps,Text} from 'native-base'

type Props = IButtonProps & {
title: string;
}
export function Button({title, ...rest}: Props){
return(
<ButtonNativeBase    w={'full'}        h={14}
bg={ variant === "outline" ? "transparent" : "green.700"}
borderWidth={variant === "outline" ? 1 : 0 }
borderColor="green.500"
rounded="sm"
_pressed={{
bg: variant === "outline" ? "gray.500" : "green.50"
}}
{...rest}// tem que ser o ultimo
>
<Text color={ variant === "outline" ? "green.500" : "white"}
{title}
</Text>
</ButtonNativeBase>

)
}
Criando o SignUpn dentro da pasta Screens de ctrl+c cntrl+v
no SignIn:

export function SignUp() {
return (
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
<VStack flex={1} bg="gray.700" px={10} pb={16}>
<Image
source={BackgroundImg}
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
/>

</Center>

</VStack>
</ScrollView>

);

}

Instalando Stack Navigator:
Link: https://reactnavigation.org/docs/getting-started
Core de Navegação:
Instalação: npm install @react-navigation/native
Instalando as dependencias de navegação:
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
Rotas de Navegação:
Criar uma pasta Routes dentro do src, dentro de routes o arquivos auth.routes.tsx:
Conteudo auth.routes:
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();
import { SignIn } from "@screens/Signin";
import { SignUp } from "@screens/SignUp";

{Tipando rotas aqui}

export function AuthRoutes(){

return(
<Navigator>
<Screen
name="signIn"
component={SignIn}
/>
<Screen
name="signUp"
component={SignUp}
/>
</Navigator>
)
}

Tipando rota:
type AuthRoutes = {
signIn: undefined;
signUp: undefined;
}
export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>

Criando Contexto de Navegação:
Criar um arquivo index.tsx dentro da pasta routes:

Conteudo do index:
import {NavigationContainer} from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

export function Routes(){

return(
<NavigationContainer>
<AuthRoutes />
</NavigationContainer>

)
}

Dentro do App.tsx trocar o
import { SignUp } from '@screens/SignUp';

por
import { Routes } from './src/routes';

e
{fontsLoaded ? <SignUp/> :  <Load/>}
Por
{fontsLoaded ? <Routes/> :  <Load/>}

Modificando o Tema da Aplicação
Remover o background do SignIn e do SignUp (bg=”gray.700”)
VStack flex={1} bg="gray.700" px={10} pb={16}>

Dentro da pasta Routes/ index, importar o DefaulTheme:
Adicionar o import useTheme:
import { useTheme } from 'native-base'

Criar uma const {colors} = useTheme
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

import { useTheme } from 'native-base'

export function Routes(){

const { colors } = useTheme();

const theme = DefaultTheme;
theme.colors.background = colors.gray[700];

return(
<NavigationContainer theme={theme}>
<AuthRoutes />
</NavigationContainer>

)
}

Aplicando Navegação de Autenticação:
Importar o =>
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";


criar uma const:
const navigation = useNavigation<AuthNavigationRoutesProps>();

Criar a função de navegação:
function handleNewAccount(){
navigation.navigate('signUp')
}

Chamar a funcão no botao Criar conta:
<Button
title="Criar Conta" variant="outline"
onPress={handleNewAccount}
/>

Para retorna a tela inicial:
const navigation = useNavigation();

function handleGoBack(){
navigation.goBack();
}
Chamar a função no botão:
<Button
title="Volta para Login" variant="outline"
mt={24}//mt = MarginTop
onPress={handleGoBack}/>


Botton Tab Navegation:
Criar as telas Home, Exercise,History, Profile na pasta screen:
Estrutura basica apenas p/ visualização:
import { Center, Text } from "native-base";
export function Profile(){
return(
<Center flex={1}>
<Text>Profile</Text>
</Center>
)
}
Instalando Bottom Navigator link: https://reactnavigation.org/
Clica em DOCS na aba a esquerda clicar em GUIDE, TAB NAVIGATION,
INSTALANDO: npm install @react-navigation/bottom-tabs

 
Criando as rotas do App
Criar um arquivo app.routes.tsx dentro da pasta routes
 
 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Exercise} from "@screens/Exercise";
import { Profile } from "@screens/Profile";
import { History } from "@screens/History";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){

return(

<Navigator>
<Screen
name="home"
component={Home}
/>

<Screen
name="History"
component={History}
/>

<Screen
name="Profile"
component={Profile}
/>
<Screen
name="Exercise"
component={Exercise}
/>
</Navigator>
)
}

Tipando as rotas do App

type AppRoutes = {
home:undefined;
exercise:undefined;
profile: undefined;
history:undefined;
}
export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

Removendo Header:
<Navigator screenOptions={{  headerShown:false, tabBarShowLabel:false,
}}>

tabBarShowLabel:false,
Remove a Label dos icones
Alterando o icones Bottom Navigation:
Importar os icones da pasta assets
import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import ExerciseSvg from '@assets/exercise.svg'
Adicionar o icones as telas:
<Screen
name="home"
component={Home}
options={{
tabBarIcon: ( {color} )=> (
<HomeSvg fill={color}/>
)
}}
/>

Definindo Tamanhos com o useTheme:
Importar o useTheme:
import { useTheme } from "native-base";

importer o tokens de tamanho:
const { sizes } = useTheme;
const iconSize = sizes[6];

Ficando assim:
<HomeSvg fill={color} width={iconSize} height={iconSize}/>

Estilizando Menu Ativo e Inativo:
const { sizes, colors } = useTheme();

<Navigator screenOptions={{
headerShown:false,
tabBarShowLabel:false,
tabBarActiveTintColor:colors.green[500],
tabBarInactiveTintColor:colors.gray[200]
}}>
Estilizando a Bottom Navigator

tabBarStyle:{
backgroundColor:colors.gray[600],
borderTopWidth:0,
height: Platform.OS ==="android" ? "auto" : 96,
paddingBottom: sizes[10],
paddingTop: sizes[6]
}















