import { Text, View, StyleSheet, ScrollView, } from "react-native"

export const Home = () => {
    return (
        <ScrollView>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <View style={styles.categoryList}>
                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 80,
                            height: 30,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Kategoriler</Text>
                        </View>
 
                    <View style={{ left: 2, width: 1, height: 30, backgroundColor: "lightgrey"}}></View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 80,
                            alignItems: "center",
                            left: 4,
                            backgroundColor: "#b32e2e",
                            justifyContent: "center"
                        }}>
                            <Text style={{color: "white"}}>Kadın</Text>
                        </View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 80,
                            alignItems: "center",
                            left: 8,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Erkek</Text>
                        </View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 80,
                            alignItems: "center",
                            left: 12,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Ev & Yaşam</Text>
                        </View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 100,
                            alignItems: "center",
                            left: 16,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Süpermarket</Text>
                        </View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 100,
                            alignItems: "center",
                            left: 19,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Kozmetik</Text>
                        </View>

                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "grey",
                            borderRadius: 10,
                            width: 100,
                            alignItems: "center",
                            left: 22,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Anne & Çocuk</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryList: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: "space-between"
    },
    text: {
        
    }
});
