import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();
import { SignIn } from "@screens/Signin";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>

export function AuthRoutes(){

    return(
        <Navigator screenOptions={{headerShown:false}}>
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