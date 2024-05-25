import { Container, VStack, Text, Box, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to Vape Haven
        </Text>
        <Image src="https://images.unsplash.com/photo-1618588487847-d940dcdd6e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YXBlJTIwc2hvcHxlbnwwfHx8fDE3MTY2NTA3OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vape Shop" borderRadius="md" boxShadow="md" />
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the best vaping products and accessories.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaShoppingCart />}>
          Shop Now
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
