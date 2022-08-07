import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdt = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput name="name" />
        <TextInput name="email" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdt;
