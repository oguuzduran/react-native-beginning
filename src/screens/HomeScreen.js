import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Anasayfa</Text>
			<Button title="Kurslara Git" onPress={() => navigation.navigate('Kurslar')} />
			<Button title="Kurs Bilgileri" onPress={() => navigation.navigate('KursBilgileri')} />
			<Button title="Sayaç Uygulaması" onPress={() => navigation.navigate('Sayac')} />
			<Button title="Kutu Uygulaması" onPress={() => navigation.navigate('Kutu')} />
			<Button title="Renk Değiştir" onPress={() => navigation.navigate('RenkDegistir')} />
			<Button title="Şifre Ekranı" onPress={() => navigation.navigate('PasswordScreen')} />
			<Button title="Design Ekranı" onPress={() => navigation.navigate('DesignScreen')} />
		</View>
	);
}

const styles = StyleSheet.create({});
