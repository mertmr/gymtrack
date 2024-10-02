import React from "react";

import { theme } from "@/lib/constants";
import { useColorScheme } from "@/lib/useColorScheme";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
	const { colorScheme } = useColorScheme();

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="(tabs)" />
			<Stack.Screen name="add-workout" options={{ presentation: "modal" }} />
		</Stack>
	);
}
