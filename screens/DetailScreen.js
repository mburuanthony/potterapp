import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import EVIcon from "react-native-vector-icons/EvilIcons";
import { Header } from "../components/Header";
import { usealert } from "../context/alertctx";
import { retrievecharacter } from "../api/methods";
import { container, subtitle } from "../constants/styles";
import { colors } from "../constants/colors";

let placeholderimg = require("../assets/placeholder.png");

function DetailScreen({ route, navigation }) {
  const { characterUid } = route?.params;
  const [character, setcharacter] = useState({});
  const { setisvible, setisloading, setissuccess } = usealert();
  const { black } = colors;

  const goback = () => navigation.goBack();

  const ongetcharacter = async () => {
    setisvible(true);
    setisloading(true);

    const { isOK, character } = await retrievecharacter(characterUid);
    setisloading(false);

    if (isOK) {
      setcharacter(character);
      setissuccess(true);

      setTimeout(() => {
        setisvible(false);
      }, 1200);
    } else {
      setissuccess(false);

      setTimeout(() => {
        setisvible(false);
      }, 1200);
    }

    setissuccess(false);
    setisloading(false);
    setisvible(false);
  };

  useEffect(() => {
    ongetcharacter();
  }, [characterUid]);

  return (
    <View style={[container, styles.container]}>
      <ImageBackground
        source={character?.image ? { uri: character?.image } : placeholderimg}
        alt={character?.name}
        style={styles.image}
        resizeMode={character?.image ? "cover" : "contain"}
      >
        <Header positionabsolute gotoprevscreen />
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.row_ctr}>
          <View style={styles.row_child}>
            <Text style={[styles.title, { marginTop: 12 }]}>Name</Text>
            <Text style={styles.value}>{character?.name}</Text>
          </View>

          <View>
            <Text style={styles.title}>Date Of Birth</Text>
            <Text style={styles.value}>
              {character?.dateOfBirth ? character?.dateOfBirth : "N/A"}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>Species</Text>
        <Text style={styles.value}>
          {character?.species ? character?.species : "N/A"}
        </Text>

        <Text style={styles.title}>Gender</Text>
        <Text style={styles.value}>
          {character?.gender ? character?.gender : "N/A"}
        </Text>

        <Text style={styles.title}>House</Text>
        <Text style={styles.value}>
          {character?.house ? character?.house : "N/A"}
        </Text>

        <Text style={styles.title}>Ancestry</Text>
        <Text style={styles.value}>
          {character?.ancestry ? character?.ancestry : "N/A"}
        </Text>

        <Text style={styles.title}>House</Text>
        <Text style={styles.value}>
          {character?.house ? character?.house : "N/A"}
        </Text>

        <View style={[styles.row_ctr, { marginTop: 8 }]}>
          <View>
            <Text style={styles.title}>Wand Wood</Text>
            <Text style={styles.value}>
              {character?.wand?.wood ? character?.wand?.wood : "N/A"}
            </Text>
          </View>

          <View style={{ marginHorizontal: 48 }}>
            <Text style={styles.title}>Wand Core</Text>
            <Text style={styles.value}>
              {character?.wand?.core ? character?.wand?.core : "N/A"}
            </Text>
          </View>

          <View>
            <Text style={styles.title}>Wand Length</Text>
            <Text style={styles.value}>
              {character?.wand?.length ? character?.wand?.length : "N/A"}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>Actor</Text>
        <Text style={styles.value}>
          {character?.actor ? character?.actor : "N/A"}
        </Text>
      </View>

      <TouchableOpacity style={styles.goback} onPress={goback}>
        <EVIcon name="chevron-left" color={black} size={36} />
        <Text style={[subtitle, { fontWeight: "600" }]}>Go Back</Text>
      </TouchableOpacity>

      <StatusBar style="light" backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 380,
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    color: colors.lightblack,
  },
  value: {
    marginRight: 4,
    fontWeight: 600,
    fontSize: 16,
  },
  row_ctr: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  row_child: {
    marginRight: 48,
    marginBottom: 8,
  },
  goback: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: colors.gray,
  },
});

export default DetailScreen;
