import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
    const { data, error, isLoading} = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();
    // console.log(data);

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton times={3} />
    } else if (error) {
        content = <div>Error loading data...</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>;

            return( 
            <ExpandablePanel key={album.id} header={header}>
                List of albums
            </ExpandablePanel>
            )
        });
    }

  return (
    <div>
        <div>
            Albums for {user.name}
            <Button onClick={handleAddAlbum} >
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
    );
};

export default AlbumList