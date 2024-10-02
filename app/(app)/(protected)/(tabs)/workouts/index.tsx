import { Link, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H2, Muted } from "@/components/ui/typography";

// type for WorkOutItem
type WorkoutItemProps = {
	name: string;
	duration: number;
	lastPerformed: string;
};

const WorkoutItem = ({ name, duration, lastPerformed }: WorkoutItemProps) => (
	<TouchableOpacity className="bg-card p-4 rounded-lg mb-4">
		<Text className="font-bold">{name}</Text>
		<Muted>Duration: {duration} minutes</Muted>
		<Muted>Last performed: {lastPerformed}</Muted>
	</TouchableOpacity>
);

export default function Workouts() {
	const router = useRouter();
	const workouts = [
		{ name: "Full Body Workout", duration: 60, lastPerformed: "2 days ago" },
		{ name: "Upper Body Focus", duration: 45, lastPerformed: "5 days ago" },
		{ name: "Leg Day", duration: 50, lastPerformed: "1 week ago" },
	];

	return (
		<SafeAreaView className="flex-1 bg-background p-4">
			<View style={{ flex: 1 }}>
				<ScrollView className="flex-1">
					<View className="p-4 gap-y-6">
						<View>
							<H2 className="mb-2">Your Workouts</H2>
							{workouts.map((workout, index) => (
								<WorkoutItem key={index} {...workout} />
							))}
						</View>

						<View>
							<H2 className="mb-2">Suggested Workouts</H2>
							<Muted className="mb-2">Based on your goals and history</Muted>
							<WorkoutItem
								name="High Intensity Interval Training"
								duration={30}
								lastPerformed="Try it out!"
							/>
						</View>
					</View>
				</ScrollView>

				<Link href="/(app)/add-workout" asChild>
					<TouchableOpacity
						style={{
							position: "absolute",
							right: 20,
							bottom: 20,
							backgroundColor: "#007AFF",
							width: 56,
							height: 56,
							borderRadius: 28,
							justifyContent: "center",
							alignItems: "center",
							elevation: 6,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 3,
							},
							shadowOpacity: 0.27,
							shadowRadius: 4.65,
						}}
					>
						<Text style={{ color: "white", fontSize: 20 }}>+</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</SafeAreaView>
	);
}
