import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Octicons, AntDesign } from '@expo/vector-icons';
import { Login } from "../Component/Login"

export const Account = () => {
    const [selectedTab, setSelectedTab] = useState(null);

    const handleBack = () => {
        setSelectedTab(null);
    };

    return (
        <View style={styles.container}>
            {selectedTab ? (
                <View style={styles.contentContainer}>
                    {selectedTab === 'Login' && <Login />}

                    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                        <Text><AntDesign name="arrowleft" size={20} color="white" /></Text>
                    </TouchableOpacity>

                </View>
            ) : (
                <View>

                    <View>
                        <Text style={styles.text}>Alışveriş yapmak için giriş yapman lazım. </Text>
                        <Octicons name="smiley" size={40} color="black" style={styles.icon} />
                    </View>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setSelectedTab('Login')}
                    >
                        <View style={styles.loginContainer}>
                            <Text style={styles.loginText}>
                                Giriş Yap
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        top: 160,
        fontWeight: "bold"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        top: 300,
        width: 150,
        height: 60,
        left: 106,
        backgroundColor: "#b32e2e",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    icon: {
        top: 240,
        left: 165
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
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
        top: 50,
    }
});
