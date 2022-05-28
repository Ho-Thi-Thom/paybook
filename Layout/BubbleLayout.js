import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { height, width } from "~/utils/screen";

const BubbleLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {/* Cá đuối */}
        <Svg
          style={{
            top: "10%",
            left: "5%",
            position: "absolute",
            width: 220,
            height: 220,
          }}
        >
          <Defs>
            <LinearGradient id="grad1">
              <Stop offset="0%" stopColor="#EEADD2" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FAD8A6" stopOpacity="0.5" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad1)"
            d="M38.8,-60C51.6,-52.2,64.2,-43.6,69,-31.9C73.8,-20.1,70.8,-5.2,69.2,10.4C67.6,25.9,67.4,42.1,58.9,50C50.4,57.8,33.6,57.4,21.3,51.1C9.1,44.9,1.5,32.8,-1.6,23.6C-4.7,14.4,-3.2,8,-12.9,6C-22.6,4.1,-43.4,6.7,-45.2,5.5C-46.9,4.3,-29.7,-0.7,-26.6,-14.1C-23.5,-27.4,-34.5,-49.1,-32.4,-61.9C-30.4,-74.7,-15.2,-78.5,-1.1,-76.8C13,-75.1,26,-67.9,38.8,-60Z"
            transform="translate(60 80)"
            scale={1.5}
          />
        </Svg>
        <Svg
          style={{
            bottom: "5%",
            right: 0,
            position: "absolute",
            width: 150,
            height: 150,
          }}
        >
          <Defs>
            <LinearGradient id="grad2">
              <Stop offset="0%" stopColor="#FAD8A6" stopOpacity="1" />
              <Stop offset="100%" stopColor="#EEADD2" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad2)"
            d="M32.1,-43.4C42.6,-43.3,52.6,-35.9,56.2,-26.2C59.7,-16.5,56.9,-4.3,50.8,4.2C44.8,12.8,35.5,17.8,30,28.4C24.5,39.1,22.8,55.5,16.2,59.3C9.6,63.1,-1.9,54.3,-6.5,43.3C-11.1,32.2,-8.8,19,-16.9,12.9C-25,6.8,-43.4,7.8,-48.7,4C-54,0.1,-46.2,-8.7,-38.3,-14C-30.4,-19.2,-22.4,-20.9,-16,-22.8C-9.6,-24.7,-4.8,-26.9,3,-31.6C10.9,-36.3,21.7,-43.5,32.1,-43.4Z"
            transform="translate(70 70)"
            scale={1.2}
          />
        </Svg>
        {/* Cá con dưới */}
        <Svg
          style={{
            bottom: "18%",
            left: "5%",
            position: "absolute",
            width: 150,
            height: 150,
          }}
        >
          <Defs>
            <LinearGradient id="grad3">
              <Stop offset="0%" stopColor="#EEADD2" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FAD8A6" stopOpacity="0.5" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad3)"
            d="M37.7,-53.1C48.8,-51.5,57.8,-41,58.4,-29.6C59,-18.2,51.3,-6,40.4,-0.7C29.5,4.6,15.5,2.9,12.6,16.7C9.7,30.5,17.9,59.8,14.3,70.9C10.7,82.1,-4.6,75.2,-10.3,61.5C-15.9,47.7,-11.9,27.2,-21.1,17.7C-30.4,8.1,-53,9.5,-62.1,3.6C-71.2,-2.3,-66.9,-15.4,-54.5,-17.6C-42.2,-19.8,-21.8,-11.1,-11.4,-13C-1,-14.9,-0.5,-27.5,6.4,-37.4C13.3,-47.3,26.6,-54.7,37.7,-53.1Z"
            transform="translate(80 70)"
          />
        </Svg>
        {/* Giọt nước */}
        <Svg
          style={{
            top: "45%",
            left: "40%",
            position: "absolute",
            width: 100,
            height: 100,
          }}
        >
          <Defs>
            <LinearGradient id="grad4">
              <Stop offset="50%" stopColor="#EEADD2" stopOpacity="0.7" />
              <Stop offset="80%" stopColor="#FAD8A6" stopOpacity="0.5" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad4)"
            d="M36.9,-12.1C44,10,43.4,34.4,29,46.4C14.6,58.4,-13.5,57.8,-32.3,44.2C-51,30.6,-60.4,4,-53.5,-17.8C-46.6,-39.6,-23.3,-56.5,-4.2,-55.1C14.9,-53.8,29.8,-34.1,36.9,-12.1Z"
            transform="translate(80 75)"
            scale={0.7}
          />
        </Svg>
        {/* Cá con trên */}
        <Svg
          style={{
            top: "5%",
            right: "5%",
            position: "absolute",
            width: 100,
            height: 100,
          }}
        >
          <Defs>
            <LinearGradient id="grad5">
              <Stop offset="0%" stopColor="#EEADD2" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FAD8A6" stopOpacity="0.5" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#grad5)"
            d="M8,-22.4C13.9,-8.8,24.4,-12.4,35.5,-9.8C46.7,-7.3,58.4,1.4,63.1,13.3C67.9,25.1,65.8,40.2,57,48C48.1,55.9,32.4,56.5,20.3,52.5C8.1,48.5,-0.5,39.9,-3.5,30.5C-6.4,21.2,-3.7,11,-16.2,7.8C-28.7,4.6,-56.5,8.3,-62.9,5.2C-69.4,2.1,-54.5,-8,-44,-15.7C-33.6,-23.3,-27.7,-28.6,-21.1,-41.9C-14.5,-55.1,-7.3,-76.4,-3.1,-71.6C1.1,-66.8,2.2,-36,8,-22.4Z"
            transform="translate(80 75)"
            scale={0.7}
          />
        </Svg>
      </View>
      <View style={styles.view}>{children}</View>
    </View>
  );
};

export default BubbleLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    width,
    height,
    backgroundColor: "#F8EBEE",
  },
  view: {
    paddingTop: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
