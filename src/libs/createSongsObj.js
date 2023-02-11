export const createSongsObj = ({ songs, albumsById, artistsById }) => {
    const songObj = songs.map(({ id, album_id, track, name }) => {
        const album = albumsById[album_id];
        const artist = artistsById[album.artist_id];
        return {
            albumName: album.name,
            artistName: artist.name,
            name,
            track,
            id,
        };
    });
    return songObj;
};
