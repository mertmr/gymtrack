import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Modal,
	FlatList,
	StyleSheet,
} from "react-native";

interface SelectProps {
	value: string;
	onValueChange: (value: string) => void;
	items: { label: string; value: string }[];
	placeholder?: string;
	disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
	value,
	onValueChange,
	items,
	placeholder,
	disabled,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const selectedItem = items.find((item) => item.value === value);

	const openModal = () => {
		if (!disabled) {
			setModalVisible(true);
		}
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const handleSelect = (item: { label: string; value: string }) => {
		onValueChange(item.value);
		closeModal();
	};

	return (
		<View>
			<TouchableOpacity
				onPress={openModal}
				disabled={disabled}
				className="flex-row items-center justify-between border border-input rounded-md p-2 bg-background"
			>
				<Text
					className={`text-foreground ${!selectedItem ? "text-muted-foreground" : ""}`}
				>
					{selectedItem
						? selectedItem.label
						: placeholder || "Select an option"}
				</Text>
				<Text className="text-foreground">▼</Text>
			</TouchableOpacity>

			<Modal
				visible={modalVisible}
				transparent
				animationType="slide"
				onRequestClose={closeModal}
			>
				<TouchableOpacity
					style={styles.modalOverlay}
					activeOpacity={1}
					onPressOut={closeModal}
				>
					<View className="bg-background rounded-t-lg overflow-hidden m-4">
						<FlatList
							data={items}
							keyExtractor={(item) => item.value}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => handleSelect(item)}
									className="p-4 border-b border-border"
								>
									<Text className="text-foreground">{item.label}</Text>
								</TouchableOpacity>
							)}
						/>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});
