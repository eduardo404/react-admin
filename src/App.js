import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/users";
import { PostList, PostCreate, PostEdit } from "./components/posts";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;