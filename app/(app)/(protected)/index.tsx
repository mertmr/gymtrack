import { User } from "@supabase/supabase-js";
// import { router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { H1, H2, Muted } from "@/components/ui/typography";
import { supabase } from "@/config/supabase";

export default function Home() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		async function fetchUser() {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
		}
		fetchUser();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "background" }}>
			<ScrollView className="flex-1">
				<View className="p-4 gap-y-6">
					<H1 className="text-center">
						Welcome, {user?.email || "Gym Enthusiast"}!
					</H1>

					<View className="bg-card p-4 rounded-lg">
						<H2>Today's Stats</H2>
						<Text className="mt-2">Workouts Completed: 1</Text>
						<Text>Total Time: 45 minutes</Text>
						<Text>Calories Burned: 300</Text>
					</View>

					<View>
						<H2 className="mb-2">Quick Actions</H2>
						<Button className="w-full mb-2" onPress={() => {}}>
							<Text>Start New Workout</Text>
						</Button>
						<Button
							className="w-full mb-2"
							variant="outline"
							onPress={() => {}}
						>
							<Text>View Workout History</Text>
						</Button>
					</View>

					<View>
						<H2 className="mb-2">Your Goals</H2>
						<Muted>You're 2 workouts away from your weekly goal!</Muted>
						{/* Add a progress bar component here if available */}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
