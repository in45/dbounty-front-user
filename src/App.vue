<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Inter,Heebo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;



}

html {
  --scrollbarBG: #CFD8DC;
  --thumbBG: #90A4AE;

}
body::-webkit-scrollbar {
  width: 8px;

}
body::-webkit-scrollbar-track {
  background: none;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  background-color: #00142CF5!important;
}


</style>
