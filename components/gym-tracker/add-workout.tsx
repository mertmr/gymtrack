import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import { H1, Muted } from "../ui/typography";

import { supabase } from "@/config/supabase";
import { useUser } from "@/lib/useUser";

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
		<View className="flex flex-1 items-center justify-center bg-background p-4 gap-y-4">
			<H1 className="text-center">Modal</H1>
			<Muted className="text-center">
				<TextInput
					style={styles.input}
					value={name}
					onChangeText={setName}
					placeholder="Workout Name"
				/>
			</Muted>
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
