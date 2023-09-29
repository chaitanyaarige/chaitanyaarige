<template>
  <v-container class="ma-0 pa-0" id="appContainer" fluid>
    <nuxt keep-alive />

    <div class="sidenav">
      <!-- <a :style="elected ? 'color:white'" href="#about">About</a> -->
      <div
        ref="editButton"
        :class="{ elected: isActive }"
        @click="menuSelected('about', $event)"
      >
        About
      </div>
      warn
      <div href="#services">Services</div>
      <div href="#clients">Clients</div>
      <div href="#contact">Contact</div>
    </div>

    <div class="main">
      <h2>Sidebar</h2>
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

<script>
import { reactive, computed } from "vue";

export default defineNuxtConfig({
  methods: {
    say: function (message) {
      alert(message);
    },
    // const sayBye = (message) => alert(message)
  },

  setup() {
    //   normal function
    function sayHi(message) {
      alert(message);
    }
    // arrow function
    const sayBye = (message) => alert(message);
    return { sayHi, sayBye };
  },
});

// const author = reactive({
//   name: "John Doe",
//   books: [
//     "Vue 2 - Advanced Guide",
//     "Vue 3 - Basic Guide",
//     "Vue 4 - The Mystery",
//   ],
// });
// // a computed ref
// const isActive = computed(() => {
//   return true;
// });
// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? "Yes" : "No";
// });
// // console.log(this.$refs.editButton);
// function menuSelected(message, event) {
//   // now we have access to the native event
//   if (event) {
//     event.preventDefault();
//   }
//   alert(message);
// }
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
  padding-top: 20px;

  text-align: center;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
}

.sidenav div {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav div:hover {
  color: #f1f1f1;
}

.sidenav .elected {
  color: #f1f1f1;
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
