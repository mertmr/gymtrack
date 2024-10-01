import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ActivityIndicator, View } from "react-native";
import * as z from "zod";

import { SafeAreaView } from "@/components/safe-area-view";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormInput, FormSelect } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { H1 } from "@/components/ui/typography";

const formSchema = z.object({
	email: z.string().email("Please enter a valid email address."),
	password: z
		.string()
		.min(8, "Please enter at least 8 characters.")
		.max(64, "Please enter fewer than 64 characters."),
});

export default function AddWorkout() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		try {
			console.log(data);
			form.reset();
		} catch (error: any) {
			console.error("Sign in error:", error);
			if (error.message === "Network request failed") {
				// You might want to use a toast or alert to show this message to the user
				console.error(
					"Network error. Please check your internet connection and try again.",
				);
			} else {
				console.error("An unexpected error occurred. Please try again later.");
			}
		}
	}

	return (
		<SafeAreaView className="flex-1 bg-background p-4">
			<View className="flex-1 gap-4 web:m-4">
				<H1 className="self-start ">Sign In</H1>
				<Form {...form}>
					<View className="gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormInput
									label="Email"
									placeholder="Email"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect={false}
									keyboardType="email-address"
									{...field}
								/>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormInput
									label="Password"
									placeholder="Password"
									autoCapitalize="none"
									autoCorrect={false}
									secureTextEntry
									{...field}
								/>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormSelect
									label="Category"
									placeholder="Select a category"
									items={[
										{ label: "Option 1", value: "option1" },
										{ label: "Option 2", value: "option2" },
										{ label: "Option 3", value: "option3" },
									]}
									{...field}
								/>
							)}
						/>
					</View>
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
					<Text>Sign In</Text>
				)}
			</Button>
		</SafeAreaView>
	);
}
