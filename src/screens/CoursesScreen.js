import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function CoursesScreen() {
	const courses = [
		{
			id: 1,
			name: 'Angular',
		},
		{
			id: 2,
			name: 'ReactJS',
		},
		{
			id: 3,
			name: 'C#',
		},
		{
			id: 4,
			name: 'C++',
		},
		{
			id: 5,
			name: 'Bootstrap',
		},
	];

	return (
		<FlatList
			data={courses}
			// horizontal
			// showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => {
				return <Text style={styles.content}>{item.name}</Text>;
			}}
		/>
	);
}

const styles = StyleSheet.create({
	content: {
		fontSize: 20,
		backgroundColor: '#d5def5',
		margin: 10,
		padding: 20,
	},
});
