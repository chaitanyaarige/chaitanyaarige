<template>
  <div class="sidenav">
    <!-- <a :style="elected ? 'color:white'" href="#about">About</a> -->

    <div>
      <img class="rounded-full" src="../public/1696142348770.jpg" alt="" />
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'about' }]"
      @click="changeActiveElement('about', $event)"
    >
      About
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'experience' }]"
      class="sideTitles"
      @click="changeActiveElement('experience', $event)"
    >
      Experience
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'education' }]"
      @click="changeActiveElement('education')"
      class="sideTitles"
    >
      Education
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'skills' }]"
      @click="changeActiveElement('skills', $event)"
      class="sideTitles"
    >
      Skills
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'projects' }]"
      @click="changeActiveElement('projects', $event)"
      class="sideTitles"
    >
      Projects
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'interests' }]"
      @click="changeActiveElement('interests', $event)"
      class="sideTitles"
    >
      Interests
    </div>
    <div
      :class="['sideTitles', { elected: isActive === 'awards' }]"
      @click="changeActiveElement('awards', $event)"
      class="sideTitles"
    >
      Awards
    </div>
    <NuxtLink to="/about" class="sideTitles">Blog</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "SideNav",
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

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
