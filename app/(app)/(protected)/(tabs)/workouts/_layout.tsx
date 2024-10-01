import { Stack } from 'expo-router'

const StackLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="add-workout" options={{ presentation: "modal" }} />
		</Stack>
	);
}

export default StackLayout