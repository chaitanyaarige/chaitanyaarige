<template>
  <div class="sidenav">
    <!-- <a :style="elected ? 'color:white'" href="#about">About</a> -->

    <div>
      <img
        class="rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>

    {{ isActive }}
    <div
      :class="['sideTitles', { elected: isActive === 'about' }]"
      @click="changeActiveElement('about', $event)"
    >
      About
    </div>
    <div
      :class="publishedBooksMessage"
      class="sideTitles"
      @click="changeActiveElement('experience', $event)"
    >
      Experience
    </div>
    <div @click="changeActiveElement('education')" class="sideTitles">
      Education
    </div>
    <div href="#contact" class="sideTitles">Skills</div>
    <div href="#contact" class="sideTitles">Projects</div>
    <div href="#contact" class="sideTitles">Interests</div>
    <NuxtLink to="/about" class="sideTitles">Awards</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      isActive: null,
    };
  },
  methods: {
    changeActiveElement: function (menu) {
      this.isActive = menu;
    },
  },
};
</script>

<style scoped>
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
  text-decoration: underline;
}

.sideTitles {
  padding: 6px 8px 6px 16px;
  cursor: pointer;
  text-transform: uppercase;
  /* text-decoration: none; */
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
