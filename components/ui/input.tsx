import * as React from "react";
import { TextInput, TextInputProps } from "react-native";

import { cn } from "@/lib/utils";

interface InputProps extends Omit<TextInputProps, "onChange" | "value"> {
	className?: string;
	placeholderClassName?: string;
	type?: "text" | "number";
	onChange?: (value: string | number) => void;
	value?: string | number;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
	(
		{
			className,
			placeholderClassName,
			type = "text",
			onChange,
			value,
			...props
		},
		ref,
	) => {
		const handleChangeText = (text: string) => {
			if (type === "number") {
				const numValue = text === "" ? "" : Number(text);
				onChange?.(numValue);
			} else {
				onChange?.(text);
			}
		};

		return (
			<TextInput
				ref={ref}
				className={cn(
					"web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
					props.editable === false && "opacity-50 web:cursor-not-allowed",
					className,
				)}
				placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
				keyboardType={type === "number" ? "numeric" : "default"}
				onChangeText={handleChangeText}
				value={value?.toString()}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export { Input };
