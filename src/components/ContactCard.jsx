import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { EditIcon, EmailIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onOpenEdit, getContactId, deleteContact }) => {
  const updateHandler = (id) => {
    getContactId(id);
    onOpenEdit();
  };

  const deleteContactHandler = (id) => {
    deleteContact(id);
  };
  return (
    <Box p="4">
      <Flex
        bg="purple.600"
        justify="space-between"
        p="4"
        borderRadius="xl"
        boxShadow="xl"
        color="white"
        mb="4"
      >
        <Link to={`/contacts/${contact.id}`}>
          <Flex align="center">
            <EmailIcon w="30px" h="30px" mr="4"></EmailIcon>
            <Stack>
              <Text>{contact.name}</Text>
              <Text>{contact.email}</Text>
            </Stack>
          </Flex>
        </Link>

        <Flex align="center">
          <EditIcon
            w="25px"
            h="25px"
            mr="4"
            onClick={() => updateHandler(contact.id)}
          ></EditIcon>
          <DeleteIcon
            w="25px"
            h="25px"
            mr="4"
            color="red"
            onClick={() => deleteContactHandler(contact.id)}
          ></DeleteIcon>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactCard;
