import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/react";
import ContactCard from "./components/ContactCard";
import Popup from "./components/Popup";
import ContactForm from "./components/ContactForm";
import { v4 as uuidv4 } from "uuid";
import {
  getAllContacts,
  createContact,
  updateContactOnServer,
  deleteContactOnServer,
} from "./network";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const fetchContacts = async () => {
      const data = await getAllContacts();
      console.log(data);
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const [searchData, setSearchData] = React.useState("");

  const [contacts, setContacts] = React.useState([
    // { name: "user 1", email: "user1@mail.com", id: 1 },
    // { name: "user 2", email: "user2@mail.com", id: 2 },
    // { name: "user 3", email: "user3@mail.com", id: 3 },
    // { name: "user 4", email: "user4@mail.com", id: 4 },
    // { name: "user 5", email: "user5@mail.com", id: 5 },
    // { name: "user 6", email: "user6@mail.com", id: 6 },
  ]);

  const addNewContact = async (name, email) => {
    if (
      contacts.findIndex((contact) => contact.email === email) === -1 &&
      email !== ""
    ) {
      const data = await createContact(name, email);
      console.log("create", data);
      setContacts([...contacts, { name, email }]);
    }
  };

  const [contactId, setContactId] = React.useState("");

  const getContactId = (id) => {
    setContactId(id);
  };
  console.log(contactId);

  const updateContact = async (name, email, id) => {
    const data = await updateContactOnServer(name, email, id);
    if (contacts) {
      setContacts((prev) => [
        ...contacts.filter((contact) => contact.id !== id),
        { name, email, id },
      ]);
    }
  };

  const deleteContact = async (id) => {
    const data = await deleteContactOnServer(id);
    setContacts((prev) => [...contacts.filter((contact) => contact.id !== id)]);
  };

  let searchContacts = contacts.filter((contact) =>
    contact.name.includes(searchData)
  );

  let selectedContact = contacts.find((contact) => contact.id === contactId);
  console.log(selectedContact);

  return (
    <>
      <Popup
        isOpen={isOpen}
        title={"Add New Contact"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ContactForm addNewContact={addNewContact} onClose={onClose} />
      </Popup>
      <Popup
        isOpen={isOpenEdit}
        title={"Update Contact"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
      >
        <ContactForm
          updateContact={updateContact}
          addNewContact={addNewContact}
          onClose={onCloseEdit}
          selectedContact={selectedContact}
        />
      </Popup>
      <Box>
        <Flex p="4" justify="center" align="center">
          <Image src="/accept-call.png" w="100px" h="100px" mr="4"></Image>
          <Heading as="h1" textTransform="uppercase">
            Contact App
          </Heading>
        </Flex>
        <Box p="4">
          <Button
            bg="purple.700"
            color="white"
            w="full"
            fontSize="xl"
            fontWeight="bold"
            colorScheme="purple"
            onClick={onOpen}
          >
            <AddIcon h="20px" w="20px" mr="4"></AddIcon>Add Contact
          </Button>
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              focusBorderColor="purple.400"
              type="tel"
              placeholder="Search Contact"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </InputGroup>
        </Box>
        {searchContacts.map((contact, index) => (
          <ContactCard
            getContactId={getContactId}
            deleteContact={deleteContact}
            contact={contact}
            key={index}
            onOpenEdit={onOpenEdit}
          ></ContactCard>
        ))}
      </Box>
    </>
  );
};

export default App;
