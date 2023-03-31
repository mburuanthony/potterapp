import { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Dimensions, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { Character } from "../components/Character";
import { usealert } from "../context/alertctx";
import { getcharacters } from "../api/methods";
import { container } from "../constants/styles";
import { colors } from "../constants/colors";

let deviceHeight = Dimensions.get("window").height;

function HomeScreen() {
  const [characters, setcharacters] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const { setisvible, setisloading, setissuccess } = usealert();
  const { lightblack } = colors;

  const onfetchcharacters = async () => {
    setisvible(true);
    setisloading(true);

    const { isOK, data } = await getcharacters();
    setisloading(false);

    if (isOK) {
      setcharacters(data);
      setissuccess(true);
    } else {
      setissuccess(false);
    }

    setisvible(false);
    setisloading(false);
    setissuccess(false);
  };

  const onRefresh = useCallback(() => {
    setrefreshing(true);
    onfetchcharacters();
    setrefreshing(false);
  }, []);

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
      <Header />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={characters}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={6}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[lightblack]}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList: {
    alignSelf: "stretch",
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
