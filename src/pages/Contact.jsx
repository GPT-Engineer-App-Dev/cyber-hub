import { Box, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Contact Us
        </Text>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="blue">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default Contact;