import { List, Datagrid, ReferenceField, TextField, EditButton, Edit } from "react-admin";

export const PostList = props => (
  <List {...props}>
    <Datagrid rowClick="toggleSelection">
    <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);