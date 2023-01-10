import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store/thunks/removeUser";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting User</div> }
        {user.name}
    </>

  return ( 
        <ExpandablePanel header={header} > 
            <AlbumList user={user}></AlbumList>
        </ExpandablePanel>
        );
}

export default UsersListItem