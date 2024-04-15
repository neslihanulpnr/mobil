import { Text, View, StyleSheet, TouchableOpacity, ScrollView,  } from "react-native"

export const Hamper = () => {
    return (
         <ScrollView>
            <View style={styles.Container}>
                <View style={styles.Hamper}>
                    <Text style={styles.text}> Sepetinizde ürün bulunmamaktadır. </Text>
                </View>
                <View style={styles.shopping}>
                    <TouchableOpacity>
                        <Text style={styles.shopText}>Alışverişe devam et</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: "center",
    },
    Hamper: {
        top: 100
    },
    shopping:{
        top: 170,
        width: 180,
        height: 50,
        backgroundColor: "#b32e2e", 
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    shopText: {
        color: "white",
        fontWeight: "bold",
    },
    text: {
        fontWeight: "bold",
        fontSize : 23
    }
});
