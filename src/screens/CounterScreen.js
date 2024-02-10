import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.payload };
		case 'decrement':
			return { ...state, count: state.count - action.payload };
		case 'clear':
			return { ...state, count: action.payload };
	}
};

export default function CounterScreen() {
	// const [counter, setCounter] = useState(0);
	// const [state, dispatch] = useReducer(first, second, third);
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<View>
			<Button
				title="Arttır +1"
				onPress={() => {
					dispatch({ type: 'increment', payload: 1 });
					// setCounter(counter + 1);
				}}
			/>
			<Button
				title="Azalt -1"
				onPress={() => {
					dispatch({ type: 'decrement', payload: 1 });
					// setCounter(counter - 1);
				}}
			/>
			<Button
				title="SIFIRLA"
				onPress={() => {
					// setCounter(0);
					dispatch({ type: 'clear', payload: 0 });
				}}
			/>
			<Text>Sayı: {state.count}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
