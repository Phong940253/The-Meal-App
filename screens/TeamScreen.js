import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={
                    Platform.OS === "android" ? Colors.primaryColor : ""
                }
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

const TeamScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Custom by</Text>
            <Text>Nguyễn Văn Phong</Text>
            <Text>Trịnh Thị Phương Vi</Text>
            <Text>Nguyễn Danh Trung</Text>
            <Text>Trần Lê Chánh Hạnh</Text>
        </View>
    );
};

TeamScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Team",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        margin: 20,
        textAlign: "center",
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15,
    },
});

export default TeamScreen;
