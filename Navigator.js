import { createStackNavigator } from '@react-navigation/stack';
import { Hamper } from "./Screens/Hamper";
import { Favorite } from "./Screens/Favorite";
import { Account } from "./Screens/Account";
import { Home } from "./Screens/Home";
import Footer from './Homepage/Footer';
import { Navbar } from './Homepage/Navbar';


const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>

            
            <Stack.Screen name="Footer" component={Footer} options={{
                title: "",
                headerStyle: { height: 1, backgroundColor: "#850b0b" }
            }} />

            <Stack.Screen name='Home' component={Home}
                options={{
                    title: "",
                    headerStyle: { height: 1, backgroundColor: "#850b0b" }
                }} />

            <Stack.Screen name='Favorite' component={Favorite}
                options={{
                    title: "",
                    headerStyle: { height: 1, backgroundColor: "#850b0b" }
                }} />

            <Stack.Screen name='Hamper' component={Hamper}
                options={{
                    title: "",
                    headerStyle: { height: 1, backgroundColor: "#850b0b" }
                }} />

            <Stack.Screen name='Account' component={Account}
                options={{
                    title: "",
                    headerStyle: { height: 1, backgroundColor: "#850b0b" }
                }} />


        </Stack.Navigator>
    )
}