import React, { useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainAnimatedHeader from "rn-dev-dock";
// import AnimatedHeader from "./AnimatedHeader";
// import { AnimatedHeader } from 'my-react-native-package-test-fahad';
// import { AnimatedHeader } from 'my-react-native-package-test-fahad';



function App(): React.JSX.Element {
  const [scrollY] = useState<Animated.Value>(new Animated.Value(0));
  const DATA = [
    { title: "Section 0", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },
    { title: "Section 2", data: ["Item 4", "Item 5", "Item 6"] },
    { title: "Section 1", data: ["Item 1", "Item 2", "Item 3"] },

  ];

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    // MyModule.show();


    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000, // Adjust duration for animation speed
      useNativeDriver: true, // Use native driver for smoother performance on Android
    }).start();
  }, []);

  const renderItem = ({ item, index }) => {
    const interpolatedOpacity = opacity.interpolate({
      inputRange: [0, index * 100], // Adjust based on list item height
      outputRange: [0, 500],
    });

    return (
      <View
        style={{
          // backgroundColor: 'green',
          width: 50,
          height: 50,
        }}
      >
        <Animated.View style={{ opacity: interpolatedOpacity }}>
          <Text>{item}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <MainAnimatedHeader scrollY={scrollY}
        leftComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        LeftComponent={
          <View
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "pink",
            }}
          ></View>
        }
        rightComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        RightComponent={
          <View
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "pink",
            }}
          ></View>
        } />
      {/* <AnimatedHeader
        LeftComponent={<View></View>}
        RightComponent={<View></View>}
      // Add any other props as needed
      /> */}

      {/* <AnimatedHeader
        scrollY={scrollY}
        leftComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        LeftComponent={
          <View
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "pink",
            }}
          ></View>
        }
        rightComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        RightComponent={
          <View
            style={{
              width: "50%",
              height: "50%",
              backgroundColor: "pink",
            }}
          ></View>
        }
      /> */}
      <Animated.SectionList // Wrap SectionList with Animated.createAnimatedComponent
        sections={DATA}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ padding: 10, backgroundColor: "lightgray" }}>
            {section.title}
          </Text>
        )}
        // ListHeaderComponent={<AnimatedHeader scrollY={scrollY} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Use native driver for smoother performance on Android
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    // padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
