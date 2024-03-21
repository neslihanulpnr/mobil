import { View, StyleSheet, TextInput, Touchable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View>
                <Ionicons name="reorder-three-outline" size={38} color="white" style={styles.reorder} />
            </View>
            <View style={styles.search}>
                <TouchableOpacity>
                    <Ionicons name="search" size={24} color="#b32e2e" style={styles.searchIcon} />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#888" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reorder: {
        left: 320,
        top: 15
    },
    navbar: {
        height: 90,
        backgroundColor: "#b32e2e",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 300,
        height: 40,
        top: 15,
        right: 28,
        borderRadius: 3,
        backgroundColor: "white",
    },
    searchIcon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color: 'black',
    }, 
});
