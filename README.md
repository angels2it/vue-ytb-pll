# vue-ytb-pll

> Youtube playlist component for vue

## How does it work?
This component can be add to any your vue project to show a player & list video of playlist by id

## How can I used it?
- Register to use playlist component

```
import YoutubePlaylist from "vue-ytb-pll";

export default {
  name: "AngeliT",
  components: {
    YoutubePlaylist
  },
  data() {
    return {
      msg: "Welcome to Youtube Playlist component"
    };
  }
};
```

- Add component to your template

```
<youtube-playlist 
      playlist-api="http://ait.codes/playlists"
      playlist-id="PLxLYo5_7D3SeXt64Fozsx83iKrD_COggW" width="100%" height="480px"></youtube-playlist>
```

> please notice that http://ait.codes/playlists is playlist api to get playlist info
> "PLxLYo5_7D3SeXt64Fozsx83iKrD_COggW" is youtube playlist id
> you can also custom width & height of playlist to fix with your UI :)

Please email me if you have any question.
