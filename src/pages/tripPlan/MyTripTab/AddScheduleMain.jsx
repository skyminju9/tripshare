import React from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import color from "../../../styles/colorPalette";
import AddSchNaming from "./AddSchedulePages/AddSchNaming";
import AddSchWhen from "./AddSchedulePages/AddSchWhen";
import AddSchWhere from "./AddSchedulePages/AddSchWhere";
import AddSchWith from "./AddSchedulePages/AddSchWith";
import AddSchImage from "./AddSchedulePages/AddSchImage";
import AddSchHash from "./AddSchedulePages/AddSchHash";
import AddSchComplete from "./AddSchedulePages/AddSchComplete";
import BasicHeader from "../../../components/BasicHeader";
import BackIcon from "../../../assets/icons/header/back_arrow.svg";
import { TravelScheduleProvider } from "../../../contexts/TravelScheduleContext";

const Stack = createNativeStackNavigator();

const AddScheduleHeader = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("TripPlan");
  };

  return (
    <BasicHeader
      title={title}
      leftComponent={
        <TouchableOpacity style={styles.leftArea} onPress={handleBackPress}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
      }
    />
  );
};

const AddScheduleMain = () => {
  const pages = [
    { name: "AddSchNaming", component: AddSchNaming },
    { name: "AddSchWhen", component: AddSchWhen },
    { name: "AddSchWhere", component: AddSchWhere },
    { name: "AddSchWith", component: AddSchWith },
    { name: "AddSchImage", component: AddSchImage },
    { name: "AddSchHash", component: AddSchHash },
    { name: "AddSchComplete", component: AddSchComplete },
  ];

  return (
    <TravelScheduleProvider>
      <>
        <SafeAreaView style={styles.topSafeArea}>
          <AddScheduleHeader title="나의 여행 일정 추가하기" />
        </SafeAreaView>
        <SafeAreaView style={styles.bottomSafeArea}>
          <View style={styles.container}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: "none",
                cardStyle: { backgroundColor: "transparent" },
                transitionSpec: {
                  open: { animation: "timing", config: { duration: 0 } },
                  close: { animation: "timing", config: { duration: 0 } },
                },
              }}
            >
              {pages.map((page) => (
                <Stack.Screen
                  key={page.name}
                  name={page.name}
                  component={page.component}
                />
              ))}
            </Stack.Navigator>
          </View>
        </SafeAreaView>
      </>
    </TravelScheduleProvider>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: "#FFF",
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: color.BLUE_30,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  leftArea: { flex: 1 },
});

export default AddScheduleMain;
