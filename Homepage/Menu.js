import React, { useState } from 'react';
import { View } from 'react-native';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Home } from '../Screens/Home';
import { Favorite } from '../Screens/Favorite';
import { Hamper } from '../Screens/Hamper';
import { Account } from '../Screens/Account';

export const Menu = () => {
    // İçerik state'i ve başlangıç değeri olarak Home bileşeni
    const [content, setContent] = useState(<Account/>);

    // Footer bileşenindeki butonlara tıklandığında içeriği değiştiren fonksiyonlar
    const handleHomeClick = () => setContent(<Home />);
    const handleFavoriteClick = () => setContent(<Favorite />);
    const handleHamperClick = () => setContent(<Hamper />);
    const handleAccountClick = () => setContent(<Account />);

    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            {/* İçeriği dinamik olarak değiştiren alan */}
            {content}
            <Footer 
                onHomeClick={handleHomeClick}
                onFavoriteClick={handleFavoriteClick}
                onHamperClick={handleHamperClick}
                onAccountClick={handleAccountClick}
            />
        </View>
    );
};
