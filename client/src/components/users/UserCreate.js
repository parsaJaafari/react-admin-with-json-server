import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create title="Add a User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput type="email" source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
