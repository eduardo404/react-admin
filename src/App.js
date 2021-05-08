import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/users";
import { PostList, PostCreate, PostEdit } from "./components/posts";
import Dashboard from "./components/Dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        icon={PostIcon}
      />
      <Resource
        name="users"
        list={UserList}
        icon={UserIcon}
      />
    </Admin>
  );
};

export default App;