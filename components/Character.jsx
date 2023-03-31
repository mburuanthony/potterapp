import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/colors";
import { subtitle } from "../constants/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;
let placeholderimg = require("../assets/placeholder.png");

export const Character = ({ charUid, charName, imgUri, onclickfunc }) => {
  const navigation = useNavigation();
  const gotodetail = () =>
    navigation.navigate("detail", {
      characterUid: charUid,
    });

  return (
    <TouchableOpacity style={styles.container} onPress={gotodetail}>
      <Image
        source={imgUri ? { uri: imgUri } : placeholderimg}
        alt={charName}
        style={styles.image}
        resizeMode={imgUri ? "cover" : "contain"}
      />
      <Text style={[styles.text, subtitle]}>{charName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth / 2 - 12,
    height: deviceHeight / 3 - 12,
    marginRight: 6,
    marginBottom: 10,
    paddingBottom: 8,
    justifyContent: "space-between",
    borderRadius: 8,
    backgroundColor: colors.gray,
  },
  image: {
    width: "100%",
    height: "90%",
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    marginTop: 5,
    fontWeight: "600",
    textAlign: "center",
    color: colors.blue,
  },
});
