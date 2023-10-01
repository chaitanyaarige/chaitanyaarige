<template>
  <!-- <v-container class="ma-0 pa-0" id="appContainer" fluid> -->
  <!-- <nuxt keep-alive /> -->
  <!-- <Navbar></Navbar> -->
  <SideNav></SideNav>
  <!-- <NuxtLink to="/about"> About page </NuxtLink> -->

  <!-- </v-container> -->
</template>

<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  /* height: 100%; */
  /* width: 160px; */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #246896 !important;
  overflow-x: hidden;

  text-align: center;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
}

.elected {
  color: white;
  font-weight: 600;
}

.sidenav div {
  padding: 6px 8px 6px 16px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 25px;
  /* color: #818181; */
  color: rgba(255, 255, 255, 0.7);
  display: block;
}

.sidenav div:hover {
  color: #f1f1f1;
}

.side-top {
  padding-top: 3rem;
}

.main {
  margin-left: 17rem; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
