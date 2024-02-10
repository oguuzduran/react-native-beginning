import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformation from './src/screens/CoursesInformation';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignScreen from './src/screens/DesignScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Anasayfa">
				<Stack.Screen name="Anasayfa" component={HomeScreen} />
				<Stack.Screen name="Kurslar" component={CoursesScreen} />
				<Stack.Screen name="KursBilgileri" component={CoursesInformation} />
				<Stack.Screen name="Sayac" component={CounterScreen} />
				<Stack.Screen name="Kutu" component={BoxScreen} />
				<Stack.Screen name="RenkDegistir" component={ColorChangeScreen} />
				<Stack.Screen name="PasswordScreen" component={PasswordScreen} />
				<Stack.Screen name="DesignScreen" component={DesignScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
