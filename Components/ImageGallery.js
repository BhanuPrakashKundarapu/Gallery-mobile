import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ImgArr from "./Image";

export default function ImageGallery() {
	return (
		<View style={styles.imagesGrid}>
			{ImgArr.map((i, j) => (
				<View key={j} style={styles.board}>
					<Image source={i} style={styles.img}></Image>
				</View>
			))}
		</View>
	);
}
const styles = StyleSheet.create({
	imagesGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: 10,
	},
	board: {
		width: "47%", 
		aspectRatio: 1, 
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
        borderRightColor:20,
		borderRadius: 10,
	},
	img: {
        borderRadius:20,
		width: "100%",
		height: "100%",
        objectFit:"fill",
	},
});
