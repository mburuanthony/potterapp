import { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import EVIcon from "react-native-vector-icons/EvilIcons";
import { Character } from "../components/Character";
import { getcharacters } from "../api/methods";
import { container, text } from "../constants/styles";
import { colors } from "../constants/colors";

let deviceHeight = Dimensions.get("window").height;

function SearchScreen() {
  const navigation = useNavigation();
  const [searchvalue, setsearchvalue] = useState("");
  const [charactersdata, setcharactersdata] = useState([]);
  const [searchresults, setsearchresults] = useState([]);
  const { black, lightblack } = colors;

  const goback = () => navigation.goBack();

  const onfetchcharacters = async () => {
    const { data } = await getcharacters();

    setcharactersdata(data);
  };

  const onsearch = () => {
    const output = charactersdata.filter(
      (character) =>
        character?.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
        character?.actor.toLowerCase().includes(searchvalue.toLowerCase())
    );

    setsearchresults(searchvalue !== "" ? output : []);
  };

  // flatlist
  const ITEM_HEIGHT = deviceHeight / 3 - 12;
  const keyExtractor = (item) => item?.id;
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  };
  const renderItem = ({ item }) => (
    <Character charUid={item?.id} charName={item?.name} imgUri={item?.image} />
  );

  useEffect(() => {
    onfetchcharacters();
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={styles.searchheader}>
        <TouchableOpacity onPress={goback}>
          <EVIcon name="chevron-left" color={black} size={32} />
        </TouchableOpacity>

        <TextInput
          placeholder="search harry potter characters..."
          placeholderTextColor={lightblack}
          cursorColor={lightblack}
          style={styles.searchinput}
          autoFocus
          autoCapitalize="none"
          value={searchvalue}
          onChangeText={(text) => setsearchvalue(text)}
          onKeyPress={onsearch}
        />
      </View>

      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={searchresults}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchheader: {
    marginVertical: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchinput: {
    width: "90%",
    padding: 6,
    paddingVertical: 7,
    borderRadius: 6,
    backgroundColor: colors.gray,
    color: colors.lightblack,
    fontSize: 18,
  },
  flatList: {
    marginTop: 8,
    paddingHorizontal: 8,
    alignSelf: "stretch",
  },
});

export default SearchScreen;
