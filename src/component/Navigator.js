import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigator from "./BottomNavigator";
import Login from "../screen/Login";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const user = useSelector((state) => state.user.value);
  console.log({ user });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Menu"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
