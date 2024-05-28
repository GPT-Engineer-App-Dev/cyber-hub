import { useState } from "react";
import { Box, SimpleGrid, Image, Text, VStack, Input, Button } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$699",
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$999",
    category: "Laptops",
  },
  {
    id: 3,
    name: "Tablet",
    image: "https://via.placeholder.com/150",
    price: "$499",
    category: "Tablets",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", "Smartphones", "Laptops", "Tablets"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <Box p={4}>
      <Box mb={4}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            colorScheme={selectedCategory === category ? "blue" : "gray"}
            mr={2}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Input
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <Text fontSize="xl" fontWeight="bold">
              {product.name}
            </Text>
            <Text>{product.price}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;