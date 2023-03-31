import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EVIcon from "react-native-vector-icons/EvilIcons";
import { colors } from "../constants/colors";

export const Header = ({ positionabsolute, gotoprevscreen }) => {
  const navigation = useNavigation();
  const { black, white } = colors;

  const gotosearch = () => navigation.navigate("search");
  const goback = () => navigation.goBack();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: positionabsolute ? 41 : 0,
          flexDirection: gotoprevscreen ? "row" : "row-reverse",
        },
      ]}
    >
      {gotoprevscreen && (
        <TouchableOpacity
          style={[
            styles.pressable,
            positionabsolute ? styles.absolutepressable : {},
          ]}
          onPress={goback}
        >
          <EVIcon name="chevron-left" color={black} size={32} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[
          styles.pressable,
          positionabsolute ? styles.absolutepressable : {},
        ]}
        onPress={gotosearch}
      >
        <EVIcon name="search" color={black} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  pressable: {
    paddingVertical: 3,
    borderRadius: 32,
  },
  absolutepressable: {
    backgroundColor: colors.white,
  },
});
