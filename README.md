# dfn-freight

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Description

1. I made a simple styling as the documentation requires. So just used pure CSS not SCSS. But I love to use SCSS.

2. You can filter the result by Album and Track. (I found that I can not filter by artist which does not exist in the song object. And also I can not join albums table to songs table. Because of the key, "album_id" should be "albumId" to join them so It db.json file should be updated to filter by artist and album name.)

3. You can sort the result by Album Number, Song and Track.

4. I used `$emit` to communicate between parent and child components as it's a small project

5. As this app grows, there might be a significant increase in components. so I use `Pinia` which helps us to manage states.

6. I used port 9090 due to port 5000 is used on my local main system, but I set it back to 5000. If port 5000 is used on your side, use change port on the docker-compose file.

7. Add `VUE_APP_LOCAL=http://localhost:5000` in the .env file.

### Assumptions

-   API supports `<field>_ilke` for filtering with patterns

### What's next?

-   e2e tests to be added
