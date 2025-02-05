import { View, Text, Button, TouchableHighlight, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import ImageGallery from "./ImageGallery";

export default function Home() {
	const navigation = useNavigation();
	return (
		<ScrollView
			style={{
				height: "100%",
			}}
		>
        <View style={styles.parent}>
			<ImageBackground style={styles.banner} source={require("../assets/Sources/0.jpg")}>
			<Text style={styles.bannerHeader}>Digit Art Gallery</Text>
			<Text style={styles.bannerContent}>	Step into a world where imagination knows no bounds. [Gallery Name]
						is a haven for art lovers, showcasing a diverse collection of
						contemporary and classical artworks from emerging and established
						artists. Each piece tells a story, evoking emotions and inspiring
						creativity.</Text>
            </ImageBackground>

            <ImageGallery/>
        </View>
		</ScrollView>
	);
}

const styles=StyleSheet.create({
    parent:{
        borderRadius:12,
        width:"98%",
        marginHorizontal:'auto',
    },
    banner:{
        width:"100%",
        flex:1,
        height:"auto",
        paddingVertical:22,
        borderRadius:22,
        marginHorizontal:"auto",
        marginVertical:12,
        overflow: "hidden", 
    },
    bannerHeader:{
        fontSize:42,
        textAlign:"center",
        fontWeight:"700",
        color:'white'
    },
    bannerContent:{
        color:"white",
        fontSize:18,
        width:"99%",
        textAlign:"center",
        fontStyle:"italic"
    }
})