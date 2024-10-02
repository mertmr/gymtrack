import { Stack } from 'expo-router'

export const StackLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ presentation: "modal" }} />
			{/* <Stack.Screen
				name="add-workout/index"
				options={{ presentation: "modal" }}
			/> */}
		</Stack>
	);
};