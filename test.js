const albums = [
    { id: 1, name: "1984", artist_id: "1", year_released: 1984 },
    { id: 2, name: "Women and Children First", artist_id: "1", year_released: 1980 },
    { id: 3, name: "Hot Fuss", artist_id: "2", year_released: 2004 },
    { id: 4, name: "Drones", artist_id: "3", year_released: 2015 },
    { id: 5, name: "Day & Age", artist_id: "2", year_released: 2008 },
    { id: 6, name: "Duran Duran", artist_id: "4", year_released: 1982 },
    { id: 7, name: "Rio", artist_id: "4", year_released: 1982 },
    { id: 8, name: "No Jacket Required", artist_id: "5", year_released: 1985 },
    { id: 9, name: "Animals", artist_id: "6", year_released: 1977 },
    { id: 10, name: "Dark Side of the Moon", artist_id: "6", year_released: 1973 },
];

const artists = [
    { id: 1, name: "Van Halen" },
    { id: 2, name: "The Killers" },
    { id: 3, name: "Muse" },
    { id: 4, name: "Duran Duran" },
    { id: 5, name: "Phil Collins" },
    { id: 6, name: "Pink Floyd" },
];

const songs = [
    { album_id: 1, track: 1, id: 1, name: "1984" },
    { album_id: 1, track: 2, id: 2, name: "Jump" },
    { album_id: 1, track: 3, id: 3, name: "Panama" },
    { album_id: 1, track: 4, id: 4, name: "Top Jimmy" },
    { album_id: 1, track: 5, id: 5, name: "Drop Dead Legs" },
    { album_id: 1, track: 6, id: 6, name: "Hot for Teacher" },
    { album_id: 1, track: 7, id: 7, name: "I'll Wait" },
    { album_id: 1, track: 8, id: 8, name: "Girl Gone Bad" },
    { album_id: 1, track: 9, id: 9, name: "House of Pain" },

    { album_id: 2, track: 1, id: 10, name: "And the Cradle Will Rock" },
    { album_id: 2, track: 2, id: 11, name: "Everybody Wants Some" },
    { album_id: 2, track: 3, id: 12, name: "Fools" },
    { album_id: 2, track: 4, id: 13, name: "Romeo Delight" },
    { album_id: 2, track: 5, id: 14, name: "Tora! Tora!" },
    { album_id: 2, track: 6, id: 15, name: "Loss of Control" },
    { album_id: 2, track: 7, id: 16, name: "Take Your Whiskey Home" },
    { album_id: 2, track: 8, id: 17, name: "Could This Be Magic?" },
    { album_id: 2, track: 9, id: 18, name: "In a Simple Rhyme" },

    { album_id: 3, track: 1, id: 19, name: "Jenny Was a Friend of Mine" },
    { album_id: 3, track: 2, id: 20, name: "Mr. Brightside" },
    { album_id: 3, track: 3, id: 21, name: "Smile Like You Mean It" },
    { album_id: 3, track: 4, id: 22, name: "Somebody Told Me" },
    { album_id: 3, track: 5, id: 23, name: "All These Things That I've Done" },
    { album_id: 3, track: 6, id: 24, name: "Andy, You're a Star" },
    { album_id: 3, track: 7, id: 25, name: "On Top" },
    { album_id: 3, track: 8, id: 26, name: "Change Your Mind" },
    { album_id: 3, track: 9, id: 27, name: "Believe Me Natalie" },
    { album_id: 3, track: 10, id: 28, name: "Midnight Show" },
    { album_id: 3, track: 11, id: 29, name: "Everything Will Be Alright" },

    { album_id: 4, track: 1, id: 30, name: "Dead Inside" },
    { album_id: 4, track: 2, id: 31, name: "(Drill Sargeant)" },
    { album_id: 4, track: 3, id: 32, name: "Psycho" },
    { album_id: 4, track: 4, id: 33, name: "Mercy" },
    { album_id: 4, track: 5, id: 34, name: "Reapers" },
    { album_id: 4, track: 6, id: 35, name: "The Handler" },
    { album_id: 4, track: 7, id: 36, name: "(JFK)" },
    { album_id: 4, track: 8, id: 37, name: "Defector" },
    { album_id: 4, track: 9, id: 38, name: "Revolt" },
    { album_id: 4, track: 10, id: 39, name: "Aftermath" },
    { album_id: 4, track: 11, id: 40, name: "The Globalist" },
    { album_id: 4, track: 12, id: 41, name: "Drones" },

    { album_id: 5, track: 1, id: 42, name: "Losing Touch" },
    { album_id: 5, track: 2, id: 43, name: "Human" },
    { album_id: 5, track: 3, id: 44, name: "Spaceman" },
    { album_id: 5, track: 4, id: 45, name: "Joy Ride" },
    { album_id: 5, track: 5, id: 46, name: "A Dustland Fairytale" },
    { album_id: 5, track: 6, id: 47, name: "This Is Your Life" },
    { album_id: 5, track: 7, id: 48, name: "I Can't Stay" },
    { album_id: 5, track: 8, id: 49, name: "Neon Tiger" },
    { album_id: 5, track: 9, id: 50, name: "The World We Live In" },
    { album_id: 5, track: 10, id: 51, name: "Goodnight, Travel Well" },

    { album_id: 6, track: 1, id: 52, name: "Planet Earth" },
    { album_id: 6, track: 2, id: 53, name: "Girls on Film" },
    { album_id: 6, track: 3, id: 54, name: "Is There Anyone Out There" },
    { album_id: 6, track: 4, id: 55, name: "Careless Memories" },
    { album_id: 6, track: 5, id: 56, name: "(Waiting for the) Night Boat" },
    { album_id: 6, track: 6, id: 57, name: "Sound of Thunder" },
    { album_id: 6, track: 7, id: 58, name: "Friends of Mine" },
    { album_id: 6, track: 8, id: 59, name: "Tel Aviv" },

    { album_id: 7, track: 1, id: 60, name: "Rio" },
    { album_id: 7, track: 2, id: 61, name: "My Own Way" },
    { album_id: 7, track: 3, id: 62, name: "Lonely in Your Nightmare" },
    { album_id: 7, track: 4, id: 63, name: "Hungry Like the Wolf" },
    { album_id: 7, track: 5, id: 64, name: "Hold Back the Rain" },
    { album_id: 7, track: 6, id: 65, name: "New Religion" },
    { album_id: 7, track: 7, id: 66, name: "Last Chance on the Stairway" },
    { album_id: 7, track: 8, id: 67, name: "Save a Prayer" },
    { album_id: 7, track: 9, id: 68, name: "The Chauffeur" },

    { album_id: 8, track: 1, id: 69, name: "Sussudio" },
    { album_id: 8, track: 2, id: 70, name: "Only You KNow and I Know" },
    { album_id: 8, track: 3, id: 71, name: "Long Long Way to Go" },
    { album_id: 8, track: 4, id: 72, name: "I Don't Wanna Know" },
    { album_id: 8, track: 5, id: 73, name: "One More Night" },
    { album_id: 8, track: 6, id: 74, name: "Don't Lose My Number" },
    { album_id: 8, track: 7, id: 75, name: "Who Said I Would" },
    { album_id: 8, track: 8, id: 76, name: "Doesn't Anybody Stay Together Anymore" },
    { album_id: 8, track: 9, id: 77, name: "Inside Out" },
    { album_id: 8, track: 10, id: 78, name: "Take Me Home" },
    { album_id: 8, track: 11, id: 79, name: "We Said Hello Goodbye" },

    { album_id: 9, track: 1, id: 80, name: "Shine On You Crazy Diamond, parts I-V" },
    { album_id: 9, track: 2, id: 81, name: "Welcome to the Machine" },
    { album_id: 9, track: 3, id: 82, name: "Have a Cigar" },
    { album_id: 9, track: 4, id: 83, name: "Wish You Were Here" },
    { album_id: 9, track: 5, id: 84, name: "Shine On You Crazy Diamond, parts 6-9 " },

    { album_id: 10, track: 1, id: 85, name: "Speak to Me/Breathe" },
    { album_id: 10, track: 2, id: 86, name: "On the Run" },
    { album_id: 10, track: 3, id: 87, name: "Time" },
    { album_id: 10, track: 4, id: 88, name: "The Great Gig in the Sky" },
    { album_id: 10, track: 5, id: 89, name: "Money" },
    { album_id: 10, track: 6, id: 90, name: "Us and Them" },
    { album_id: 10, track: 7, id: 91, name: "Any Colour You Like" },
    { album_id: 10, track: 8, id: 92, name: "Brain Damage" },
    { album_id: 10, track: 9, id: 93, name: "Eclipse" },
];

// const newAlbumsObj = albums.map((album) => {
//     artists.map((artist) => {
//         if (parseInt(album.artist_id) === artist.id) {
//             album.artist_name = artist.name;
//         }
//     });
//     return album;
// });

// const newSongsObj = songs.map((song) => {
//     newAlbumsObj.map((album) => {
//         if (song.album_id === album.id) {
//             song.album_name = album.name;
//             song.year_released = album.year_released;
//             song.artist_name = album.artist_name;
//         }
//     });
//     return song;
// });

// console.log("newAlbumsObj", newAlbumsObj);

const createObjectById = (dataArray) =>
    dataArray.reduce((acc, { id, ...args }) => {
        if (!acc[id]) {
            acc[id] = {
                ...args,
            };
        }
        return acc;
    }, {});

const artistsbyId = createObjectById(artists);
const albumsById = createObjectById(albums);

// object getter time complexity is always O(1). e.g., obj[id]
// Array.prototype functions are generally O(n). e.g., arr.find()

const songObj = songs.map(({ album_id, track, name }) => {
    const album = albumsById[album_id];
    const artist = artistsbyId[album.artist_id];
    return {
        albumName: album.name,
        artistName: artist.name,
        name,
        track,
    };
});

console.log(JSON.stringify(songObj, null, 2));

let string = "aaa";
console.log("string.", string.concat("hahahaha"));
