import { Link, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H2, Muted } from "@/components/ui/typography";
import { supabase } from "@/config/supabase";
import { useWorkouts } from "@/lib/useWorkouts";

// type for WorkOutItem
type WorkoutItemProps = {
	name: string;
	duration: number | null;
};

const WorkoutItem = ({ name, duration }: WorkoutItemProps) => (
	<TouchableOpacity className="bg-card p-4 rounded-lg border border-border mb-4">
		<Text className="font-bold">{name}</Text>
		<Muted>Duration: {duration} minutes</Muted>
		{/* <Muted>Last performed: {lastPerformed}</Muted> */}
	</TouchableOpacity>
);

export default function Workouts() {
	const workouts = useWorkouts();

	return (
		<SafeAreaView className="flex-1 bg-background p-4">
			<View style={{ flex: 1 }}>
				<ScrollView className="flex-1">
					<View className="p-4 gap-y-6">
						<View>
							<H2 className="mb-2">Your Workouts</H2>
							{workouts.workoutList?.map((workout, index) => (
								<WorkoutItem key={index} {...workout} />
							))}
						</View>

						<View>
							<H2 className="mb-2">Suggested Workouts</H2>
							<Muted className="mb-2">Based on your goals and history</Muted>
							<WorkoutItem
								name="High Intensity Interval Training"
								duration={30}
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
