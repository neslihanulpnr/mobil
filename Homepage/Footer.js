import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Hamper } from "../Screens/Hamper";
import { Favorite } from "../Screens/Favorite";
import { Account } from "../Screens/Account";
import { useNavigation } from '@react-navigation/native';
import { Home } from '../Screens/Home';

export const Footer = () => {

    const navigation = useNavigation();

    const [contentToShow, setContentToShow] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleHomeButtonPress = () => {
        handleButtonPress(<Home />, 'Home');
        console.log("home sayfası")
        console.log("neresi bura",contentToShow)
    };

    const handleFavoriteButtonPress = () => {
        handleButtonPress(<Favorite />, 'Favorite');
        console.log("favorite sayfası")
        console.log("neresi bura2",contentToShow)
    };

    const handleHamperButtonPress = () => {
        handleButtonPress(<Hamper />, 'Hamper');
        console.log("hamper sayfası")
        console.log("neresi bura3", contentToShow);
    };

    const handleAccountButtonPress = () => {
        handleButtonPress(<Account />, 'Account');
        console.log("account sayfası")
        console.log("neresi bura4",contentToShow)
    };

    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => null,
        });

        handleButtonPress(<Home />, 'Home');
    }, [navigation]);

    const handleButtonPress = (content, buttonName) => {
        console.log("Button pressed:", buttonName);
        setSelectedButton(buttonName);
        setContentToShow(content);
    }


    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: "#b32e2e",
                width: 395,
                height: 70,
                flexDirection: "row",
            }}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: selectedButton === 'Home' ? 'white' : 'transparent',
                            flexDirection: 'column',
                        },
                    ]}
                    onPress={handleHomeButtonPress}
                >
                    <Ionicons name="home" size={30} color={selectedButton === 'Home' ? "#b32e2e" : 'white'} />
                    <Text style={[styles.buttonText, { color: selectedButton === 'Home' ? "#b32e2e" : 'white' }]}>
                        Ana sayfa
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: selectedButton === 'Favorite' ? 'white' : 'transparent',
                            flexDirection: 'column',
                        },
                    ]}
                    onPress={handleFavoriteButtonPress}
                >
                    <AntDesign
                        name="heart"
                        size={30}
                        color={selectedButton === 'Favorite' ? "#b32e2e" : 'white'}
                    />
                    <Text
                        style={[
                            styles.buttonText,
                            { color: selectedButton === 'Favorite' ? "#b32e2e" : 'white' },
                        ]}
                    >
                        Favorilerim
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: selectedButton === 'Hamper' ? 'white' : 'transparent',
                            flexDirection: 'column',
                        },
                    ]}
                    onPress={handleHamperButtonPress}
                >
                    <FontAwesome5 name="shopping-cart"
                        size={25}
                        color={selectedButton === 'Hamper' ? "#b32e2e" : 'white'}
                    />
                    <Text
                        style={[
                            styles.buttonText,
                            { color: selectedButton === 'Hamper' ? "#b32e2e" : 'white' },
                        ]}
                    >
                       Sepetim
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: selectedButton === 'Account' ? 'white' : 'transparent',
                            flexDirection: 'column',
                        },
                    ]}
                    onPress={handleAccountButtonPress}
                >
                    <Ionicons
                        name="person"
                        size={25}
                        color={selectedButton === 'Account' ? "#b32e2e" : 'white'}
                    />
                    <Text
                        style={[
                            styles.buttonText,
                            { color: selectedButton === 'Account' ? "#b32e2e" : 'white' },
                        ]}
                    >
                        Hesabım
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        top: 786,
        width: "112%",
        height: 70,
        backgroundColor: "#850b0b",
        flexDirection: 'row',
        position: "absolute"
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: '#850b0b',
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Footer;
