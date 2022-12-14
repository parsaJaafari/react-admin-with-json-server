import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" multiline />
        <DateInput label="published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
