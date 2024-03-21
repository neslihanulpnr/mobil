import { View, Text, StyleSheet } from "react-native"

export const Account = () => {
    return(
        <View>
            <Text style={styles.Text}>Alışveriş yapmak için giriş yapman lazım. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: "black",
        fontSize: 30
    }
})