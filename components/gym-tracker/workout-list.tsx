import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { supabase } from "@/config/supabase";
import { Workout } from "@/db/types";

export default function WorkoutList() {
	const [workouts, setWorkouts] = useState<Workout[]>([]);

	useEffect(() => {
		fetchWorkouts();
	}, []);

	async function fetchWorkouts() {
		const { data, error } = await supabase
			.from("workouts")
			.select("*")
			.order("created_at", { ascending: false });

		if (error) {
			console.error("Error fetching workouts:", error);
		} else {
			setWorkouts(data || []);
		}
	}

	return (
		<FlatList
			data={workouts}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<View>
					<Text>{item.name}</Text>
					<Text>{item.description}</Text>
				</View>
			)}
		/>
	);
}
