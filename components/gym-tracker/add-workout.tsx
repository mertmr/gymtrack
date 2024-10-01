import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import { supabase } from "@/config/supabase";
import { useUser } from "@/hooks/useUser";

export default function AddWorkout() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const { user, loading } = useUser();

	async function handleSubmit() {
		if (loading) return;
		const { data, error } = await supabase
			.from("workouts")
			.insert({ name, description, user_id: user?.id });

		if (error) {
			console.error("Error adding workout:", error);
		} else {
			console.log("Workout added successfully:", data);
			setName("");
			setDescription("");
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Workout Name"
			/>
			<TextInput
				style={styles.input}
				value={description}
				onChangeText={setDescription}
				placeholder="Workout Description"
				multiline
			/>
			<Button title="Add Workout" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginBottom: 10,
	},
});
