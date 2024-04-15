import { Text, View, StyleSheet, ScrollView, Image } from "react-native"

export const Home = () => {
    return (
        <ScrollView>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.categoryList}>
                        <View style={{
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            borderRadius: 10,
                            width: 80,
                            height: 30,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Kategoriler</Text>
                        </View>

                        <View style={{ left: 2, width: 1, height: 30, backgroundColor: "lightgrey" }}></View>

                        <View style={{
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            borderRadius: 10,
                            width: 80,
                            alignItems: "center",
                            left: 4,
                            backgroundColor: "#b32e2e",
                            justifyContent: "center"
                        }}>
                            <Text style={{ color: "white" }}>Kadın</Text>
                        </View>

                        <View style={{
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            borderRadius: 10,
                            width: 80,
                            alignItems: "center",
                            left: 8,
                            justifyContent: "center"
                        }}>
                            <Text style={styles.text}>Erkek</Text>
                        </View>

                        <View style={{
                            borderWidth: 1,
                            borderColor: "lightgrey",
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
                            borderColor: "lightgrey",
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
                            borderColor: "lightgrey",
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
                            borderColor: "lightgrey",
                            borderRadius: 10,
                            width: 100,
                            alignItems: "center",
                            left: 22,
                            justifyContent: "center",
                            marginRight: 40
                        }}>
                            <Text style={styles.text}>Anne & Çocuk</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{ width: 395, height: 1, backgroundColor: "lightgrey" }}></View>

                <View style={styles.sweat}>
                    <Text style={styles.sweatText}>Sweatshirt</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                  <View style={{
                    left: 15, 
                    width: 170, 
                    height: 250, 
                    backgroundColor: "white", 
                    alignItems: "center"}}>
                    <Image source={require("../assets/black.jpeg")} style={{width: 150, height: 200}}/>
                    <Text>dinazor desenli kadın</Text>
                    <Text>sweatshirt</Text>
                  </View>

                  <View style={{
                    left: 15, 
                    width: 170, 
                    height: 250, 
                    backgroundColor: "white", 
                    alignItems: "center", 
                    left: 20}}>
                    <Image source={require("../assets/cat.jpeg")} style={{width: 150, height: 200}}/>
                    <Text>kadın sweatshirt</Text>
                  </View>

                  <View style={{
                    left: 15, 
                    width: 170, 
                    height: 250, 
                    backgroundColor: "white", 
                    alignItems: "center", 
                    left: 25}}>
                    <Image source={require("../assets/butterfly.jpeg")} style={{width: 150, height: 200}}/>
                    <Text>kelebek desenli kadın</Text>
                    <Text>sweatshirt</Text>
                  </View>

                  <View style={{
                    left: 15, 
                    width: 170, 
                    height: 250, 
                    backgroundColor: "white", 
                    alignItems: "center", 
                    left: 30}}>
                    <Image source={require("../assets/maneskin.jpeg")} style={{width: 150, height: 200}}/>
                    <Text>maneskin yazılı kadın</Text>
                    <Text>sweatshirt</Text>
                  </View>

                  <View style={{
                    left: 15, 
                    width: 170, 
                    height: 250, 
                    backgroundColor: "white", 
                    alignItems: "center", 
                    left: 40,
                    marginRight: 50}}>
                    <Image source={require("../assets/white.jpeg")} style={{width: 150, height: 200}}/>
                    <Text>kadın sweatshirt</Text>
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
    sweat: {
        marginTop: 20,
        margin: 10
    },
    sweatText: {
       fontSize: 20  
    }, 
});
