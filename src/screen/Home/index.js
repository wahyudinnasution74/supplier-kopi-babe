import { useIsFocused } from "@react-navigation/native";
import { Box, Center, HStack, Text, VStack } from "native-base";
import React, { useEffect } from "react";
import { getProducts } from "./api";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  const isFocused = useIsFocused();
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  const fetchProducts = async () => {
    const resp = await getProducts(user._id);
    setProducts(resp);
  };
  return (
    <Box mx={5}>
      <VStack>
        <Text fontSize={"2xl"} my={5}>
          Hi, Welcome Back!
        </Text>
        <Center>
          <HStack space={3} my={5}>
            <Box bgColor={"blue.300"} p={3} shadow={3} rounded="md">
              <VStack>
                <Text fontSize={"lg"} textAlign={"center"}>
                  Jumlah Product
                </Text>
                <Text textAlign={"center"}>{products.length}</Text>
              </VStack>
            </Box>
          </HStack>
        </Center>
        <VStack>
          <Text fontSize={"2xl"} my={5}>
            Produk yang akan habis
          </Text>
          {products.length ? <ProductCard item={products[0]} /> : <Text></Text>}
        </VStack>
      </VStack>
    </Box>
  );
}
