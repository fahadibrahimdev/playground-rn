import React, { useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainAnimatedHeader from "rn-dev-dock";
// import { createShimmerPlaceholder } from "./src/ShimmerPlaceholder";
// import LinearGradient from 'expo-linear-gradient';
// import Shimmer from "./src/RNShimmeringView";


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
  ];

  const opacity = useRef(new Animated.Value(0)).current;

  // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

  const myViewRef = useRef(null);
  const [viewWidth, setViewWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);

    console.log("fahad width: ", width);
  };



  useEffect(() => {

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000, // Adjust duration for animation speed
      useNativeDriver: true, // Use native driver for smoother performance on Android
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <MainAnimatedHeader scrollY={scrollY}
        leftComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        LeftComponent={<View
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "pink",
          }}
        ></View>}
        rightComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        RightComponent={<View
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "pink",
          }}
        ></View>}
        title={"Fahad Ibrahim"}
        description="fibrahim@ssidecisions.com"
        avatarImg={require('./src/assets/appAvatar.png')} />

      {/* <Avatar
        size={64}
        rounded
        source={{
          uri: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
        }}
      // key={`${chunkIndex}-${i}`}
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

      {/* <ContentLoader /> */}
      {/* <Shimmer visible={true}>
        <Text>
          Wow, awesome here.
        </Text>
      </Shimmer> */}

      {/* <ShimmerPlaceholder /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
