import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { H1, Muted } from "@/components/ui/typography";
import { TextInput } from "@/components/ui/text-input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export default function AddWorkout() {
	const [workoutName, setWorkoutName] = useState("");
	const [exerciseType, setExerciseType] = useState("");
	const [duration, setDuration] = useState("");
	const [intensity, setIntensity] = useState("");

	const handleAddWorkout = () => {
		// Implement the logic to add the workout
		console.log("Adding workout:", { workoutName, exerciseType, duration, intensity });
	};

	return (
		<ScrollView className="flex-1 bg-background p-4">
			<View className="gap-y-4">
				<H1 className="text-center">Add Workout</H1>
				<Muted className="text-center">Enter your workout details below.</Muted>

				<TextInput
					label="Workout Name"
					value={workoutName}
					onChangeText={setWorkoutName}
					placeholder="Enter workout name"
				/>

				<Select
					label="Exercise Type"
					value={exerciseType}
					onValueChange={setExerciseType}
					placeholder="Select exercise type"
					items={[
						{ label: "Cardio", value: "cardio" },
						{ label: "Strength", value: "strength" },
						{ label: "Flexibility", value: "flexibility" },
					]}
				/>

				<TextInput
					label="Duration (minutes)"
					value={duration}
					onChangeText={setDuration}
					placeholder="Enter duration"
					keyboardType="numeric"
				/>

				<Select
					label="Intensity"
					value={intensity}
					onValueChange={setIntensity}
					placeholder="Select intensity"
					items={[
						{ label: "Low", value: "low" },
						{ label: "Medium", value: "medium" },
						{ label: "High", value: "high" },
					]}
				/>

				<Button onPress={handleAddWorkout}>Add Workout</Button>
			</View>
		</ScrollView>
	);
}
