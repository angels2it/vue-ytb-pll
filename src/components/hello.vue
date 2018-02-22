<template>
  <div class="hello">
    <youtube-playlist 
      playlist-api="http://localhost:3000"
      playlist-id="PLxLYo5_7D3SeXt64Fozsx83iKrD_COggW" width="100%" height="480px"></youtube-playlist>
  </div>
</template>

<script>
import YoutubePlaylist from "@/components/YoutubePlaylist";

export default {
  name: "hello",
  components: {
    YoutubePlaylist
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
