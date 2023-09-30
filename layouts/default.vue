<template>
  <v-container class="ma-0 pa-0" id="appContainer" fluid>
    <nuxt keep-alive />
    <Navbar></Navbar>
    <div class="sidenav">
      <!-- <a :style="elected ? 'color:white'" href="#about">About</a> -->

      <div>
        <img
          class="rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      {{ isActive ? isActive : "null" }}
      <div
        ref="editButton"
        :class="computedClass"
        @click="changeActiveElement('about', $event)"
      >
        About
      </div>
      <div
        ref="editButton"
        :class="computedClass"
        @click="changeActiveElement('experience', count, $event)"
      >
        Experience
      </div>
      <div href="#clients">Education</div>
      <div href="#contact">Skills</div>
      <div href="#contact">Projects</div>
      <div href="#contact">Interests</div>
      <div href="#contact">Awards</div>
    </div>
    <NuxtLink to="/about"> About page </NuxtLink>
    <div class="main">
      <h2 class="side-top">Sidebar</h2>
      <p>This sidebar is of full height (100%) and always shown.</p>
      <p>Scroll down the page to see the result.</p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
    </div>
  </v-container>
</template>

<script setup>
let isActive = null;

const changeActiveElement = (menu) => {
  isActive = menu;
  return isActive;
};

const computedClass = reactive(() => ({
  "about-active": isActive && isActive === "about",
  "experience-active": isActive && isActive === "experience",
}));

// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? "Yes" : "No";
// });
// // console.log(this.$refs.editButton);
</script>

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
