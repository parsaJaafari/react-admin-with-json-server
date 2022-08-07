import { List, Datagrid, TextField, EmailField } from "react-admin";
const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
};

export default UserList;
