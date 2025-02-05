import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, Entypo, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";


// icons
import Feather from '@expo/vector-icons/Feather';
// Screens
import Home from "../Components/Home";
import TalktoExper from "../Components/TabBar/TalktoExper";
import User from "../Components/TabBar/User";
import Bell from "../Components/TabBar/Bell";
import { View ,Text, TouchableOpacity } from "react-native";
import Search from "../Components/Search";
import Featured from "../Components/Featured";
import NewArrival from "../Components/NewArrival";

// Create navigators
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tab Navigator
const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "white",
				tabBarInactiveTintColor: "black",
				tabBarStyle: { backgroundColor: "#fff", opacity: 0.8, height: 50 },
			}}
		>
			<BottomTab.Screen
				name='home'
				component={Home}
				options={{
                    tabBarShowLabel: true,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						!focused?
                        <Feather
							name='home'
							size={28}
							color={focused ? "black" : "grey"}
							style={{ margin: 0 }}
						/>:
                        <Fontisto name="home" size={24} color="black" />
					),
                    tabBarLabelStyle:{
                        color:"black"
                    }
				}}
			/>
			<BottomTab.Screen
				name='search'
				component={Search}
				options={{
                    tabBarShowLabel: true,

					headerShown: false,
					tabBarIcon: ({ focused }) => (
                        !focused?
						<Feather name="search" size={28} color="black" />:
                        <FontAwesome name="search" size={24} color="black" />
					),
                    tabBarLabelStyle:{
                        color:"black"
                    }
				}}
			/>
			<BottomTab.Screen
				name='featured'
				component={Featured}
				options={{
                    tabBarShowLabel: true,

					headerShown: false,
					tabBarIcon: ({ focused }) => (
                        !focused?
                        <AntDesign name="gift" size={28} color="black" />:
                        <Ionicons name="gift-sharp" size={24} color="black" />
					),
                    tabBarLabelStyle:{
                        color:"black"
                    }
				}}
			/>
			<BottomTab.Screen
				name='trending'
				component={Featured}
				options={{
					tabBarShowLabel: true,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
                        !focused?
                        <MaterialIcons name="trending-up" size={28} color="black" />:
                        <FontAwesome6 name="arrow-trend-up" size={24} color="black" />
					),
                    tabBarLabelStyle:{
                        color:"black"
                    }
				}}
			/>
			<BottomTab.Screen
				name='newarrival'
				component={NewArrival}
				options={{
					tabBarShowLabel: true,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
                        !focused?
                        <AntDesign name="plussquareo" size={28} color="black" />:
                        <AntDesign name="plussquare" size={24} color="black" />
					),
                    tabBarLabelStyle:{
                        color:"black"
                    }
				}}
			/>
		</BottomTab.Navigator>
	);
};

// Main App Navigator
export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen
					name='BottomTab'
					component={BottomTabNavigator}
					options={({ navigation }) => ({
                        headerTitle:"",
						headerShown: true,
						headerRight: () => (
                            <View style={{width:"100%",marginStart:"auto"}}>
							<Text
								style={{ fontSize: 20,textAlign:"right", fontWeight: "bold", marginRight: 20 }}
							>
								Logo
							</Text>
                            </View>
						),
						headerTitleAlign: "right",
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.openDrawer()}
								style={{ marginLeft: 15 }}
							>
								<Ionicons name='menu' size={24} color='black' />
							</TouchableOpacity>
						),
					})}
				/>
				<Drawer.Screen name='talktoexpert' component={TalktoExper} />
				<Drawer.Screen name='user' component={User} />
				<Drawer.Screen name='bell' component={Bell} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
