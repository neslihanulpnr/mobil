import { StatusBar } from "expo-status-bar";
import { Navigator } from './Navigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Navigator />
        </NavigationContainer>
    );
}

