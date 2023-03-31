import { StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";
import { usealert } from "../context/alertctx";
import { colors } from "../constants/colors";

export const AppAlert = () => {
  const { isloading, issuccess } = usealert();

  return (
    <View style={styles.container}>
      <View style={styles.animations}>
        {isloading && (
          <Lottie source={require("../assets/loader.json")} autoPlay loop />
        )}

        {!isloading && issuccess && (
          <Lottie
            source={require("../assets/success.json")}
            autoPlay
            loop={false}
          />
        )}

        {!isloading && !issuccess && (
          <Lottie
            source={require("../assets/error.json")}
            autoPlay
            loop={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightblack,
  },
  animations: {
    width: "90%",
    height: "30%",
    borderRadius: 16,
    backgroundColor: colors.white,
  },
});
