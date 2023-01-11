import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumsListItem";

function AlbumList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();
    // console.log(data);

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div>Error loading data...</div>
    } else {
        content = data.map(album => {
            return <AlbumListItem key={album.id} album={album}></AlbumListItem>
        });
    }

  return (
    <div>
        <div className="m-2 flex flex-row item-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button onClick={handleAddAlbum} loading={result.isLoading} >
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