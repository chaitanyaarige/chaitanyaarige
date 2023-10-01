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

<style scoped>
.dr {
  font-display: fallback;
}
</style>
