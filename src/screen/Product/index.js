// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getProducts } from "./api";
import React from "react";
import { Box, FlatList } from "native-base";
import ProductCard from "./ProductCard";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function Product({ navigation }) {
  const user = useSelector((state) => state.user.value);
  const isFocused = useIsFocused();
  const [data, setData] = React.useState({});

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  const fetchProducts = async () => {
    const resp = await getProducts(user._id);
    setData(resp);
  };

  return (
    <Box width="100%">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            fetchProducts={fetchProducts}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
}
