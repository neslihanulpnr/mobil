import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export const Login = () => {
    const [selectedTab, setSelectedTab] = useState(null);


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="E-posta" />
                    <TextInput style={[styles.input, { marginTop: -80 }]} placeholder="Şifre" />
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.text}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold" }}>
                        Hesabın yok mu?{' '}
                        <TouchableOpacity>
                            <Text style={{ color: "#b32e2e", fontWeight: "bold", top: 4, left: 2 }}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: 350,
        height: 350,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    input: {
        width: '80%',
        height: 60,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 90,
        paddingHorizontal: 10,
    },
    loginBtn: {
        width: 100,
        height: 50,
        backgroundColor: "#b32e2e",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        top: -40
    },
    text: {
        color: "white",
        fontWeight: "bold"
    },
    backButton: {
        position: 'absolute',
        top: -20,
        right: 320,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b32e2e",
        borderRadius: 10,
        width: 40,
        height: 30,
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});
