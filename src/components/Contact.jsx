import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { EditIcon, EmailIcon, DeleteIcon } from "@chakra-ui/icons";
import { getContactById } from "../network";
import { useParams } from "react-router";

const Contact = () => {
  const params = useParams();

  const [contact, setContact] = React.useState({});

  React.useEffect(() => {
    const fetchContact = async () => {
      const data = await getContactById(params.id);
      setContact(data);
      console.log(data);
    };
    fetchContact();
  }, []);

  return (
    <Box p="4">
      <Flex
        m="4"
        bg="purple.600"
        justify="space-between"
        p="4"
        h="200"
        borderRadius="xl"
        boxShadow="xl"
        color="white"
        mb="4"
      >
        <Flex align="center">
          <EmailIcon w="30px" h="30px" mr="4"></EmailIcon>
          <Stack>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
