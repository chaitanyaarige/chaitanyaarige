<template>
  <Head>
    <Title>Chaitanya Arige</Title>
    <Meta name="description" content="Chaitanya" />
  </Head>
  <!-- <nuxt keep-alive /> -->
  <!-- <Navbar></Navbar> -->
  <SideNav></SideNav>
  <About class="main"></About>
  <Experience class="main"></Experience>

  <!-- <NuxtLink to="/about"> About page </NuxtLink> -->
</template>

<style scoped>
.main {
  display: block;
}

.main {
  margin-left: 17rem; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 10px 10px;
}
</style>
