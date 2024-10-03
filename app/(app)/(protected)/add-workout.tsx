import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	ActivityIndicator,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import * as z from "zod";

import { SafeAreaView } from "@/components/safe-area-view";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormInput, FormSelect } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { H1 } from "@/components/ui/typography";

const formSchema = z.object({
	name: z.string().min(1, "Please enter a workout name."),
	date: z.string().min(1, "Please enter a date."),
	duration: z.number(),
	notes: z.string(),
});

export default function AddWorkout() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			date: new Date().toISOString().split("T")[0], // Current date as default
			duration: null,
			notes: null,
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		try {
			console.log(data);
			// Here you would typically send the data to your backend
			form.reset();
		} catch (error: any) {
			console.error("Add workout error:", error);
			// Error handling...
		}
	}

	return (
		<ScrollView className="flex-1 bg-background p-4">
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				
			>
				<View className="flex-1 gap-4 web:m-4">
					<H1 className="self-start ">Add Workout</H1>
					<Form {...form}>
						<TouchableWithoutFeedback
							onPress={Keyboard.dismiss}
							accessible={false}
						>
							<View className="gap-4">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormInput
											label="Workout Name"
											placeholder="Enter workout name"
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="date"
									render={({ field }) => (
										<FormInput
											label="Date"
											placeholder="YYYY-MM-DD"
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="duration"
									render={({ field }) => (
										<FormInput
											label="Duration (minutes)"
											placeholder="Enter duration"
											keyboardType="numeric"
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="notes"
									render={({ field }) => (
										<FormInput
											label="Notes"
											placeholder="Enter any notes"
											multiline
											numberOfLines={4}
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="notes"
									render={({ field }) => (
										<FormInput
											label="Notes"
											placeholder="Enter any notes"
											multiline
											numberOfLines={4}
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="notes"
									render={({ field }) => (
										<FormInput
											label="Notes"
											placeholder="Enter any notes"
											multiline
											numberOfLines={4}
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="notes"
									render={({ field }) => (
										<FormInput
											label="Notes"
											placeholder="Enter any notes"
											multiline
											numberOfLines={4}
											{...field}
										/>
									)}
								/>
							</View>
						</TouchableWithoutFeedback>
					</Form>
				</View>
				<Button
					size="default"
					variant="default"
					onPress={form.handleSubmit(onSubmit)}
					disabled={form.formState.isSubmitting}
					className="web:m-4"
				>
					{form.formState.isSubmitting ? (
						<ActivityIndicator size="small" />
					) : (
						<Text>Add Workout</Text>
					)}
				</Button>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
