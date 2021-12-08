import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const ContactForm = ({
  addNewContact,
  onClose,
  selectedContact,
  updateContact,
}) => {
  const [name, setName] = React.useState(
    selectedContact ? selectedContact.name : ""
  );
  const [email, setEmail] = React.useState(
    selectedContact ? selectedContact.email : ""
  );

  const onSubmit = () => {
    if (selectedContact) {
      updateContact(name, email, selectedContact.id);
      onClose();
    } else {
      addNewContact(name, email);
      onClose();
    }
  };
  return (
    <Stack>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email">
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      {selectedContact ? (
        <Button
          onClick={() => {
            onSubmit();
          }}
          colorScheme="purple"
          alignSelf="flex-end"
        >
          Update Contact
        </Button>
      ) : (
        <Button
          onClick={() => {
            onSubmit();
          }}
          colorScheme="purple"
          alignSelf="flex-end"
        >
          Add Contact
        </Button>
      )}
    </Stack>
  );
};

export default ContactForm;
