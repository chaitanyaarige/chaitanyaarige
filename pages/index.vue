<template>
  <Head>
    <Title>Chaitanya Arige</Title>
    <Meta name="description" content="Chaitanya" />
  </Head>
  <!-- <nuxt keep-alive /> -->
  <!-- <Navbar></Navbar> -->
  <SideNav @change-active-elements="menu"> </SideNav>
  <Transition name="slide-fade">
    <Education v-if="activeTab == 'education'" class="main"></Education>
  </Transition>
  <Transition name="slide-fade">
    <Experience v-if="activeTab == 'experience'" class="main"></Experience>
  </Transition>
  <Transition name="slide-fade">
    <About v-if="activeTab == 'about'" class="main"></About>
  </Transition>
  <Transition name="slide-fade">
    <Skills v-if="activeTab == 'skills'" class="main"></Skills>
  </Transition>
  <Transition name="slide-fade">
    <Projects v-if="activeTab == 'projects'" class="main"></Projects>
  </Transition>
  <Transition name="slide-fade">
    <Interests v-if="activeTab == 'interests'" class="main"></Interests>
  </Transition>

  <!-- <NuxtLink to="/about"> About page </NuxtLink> -->
</template>

<script>
export default {
  data() {
    return {
      activeTab: "about",
    };
  },

  methods: {
    menu: function (i) {
      console.log(i);
      this.activeTab = i;
    },
  },
};

// const dynamicComponent = computed() => {
//     if (activeTab == "about") {
//       return "about";
//     } else {
//       return "component-default";
//     }
//   }
// switch (activeTab) {
//   case "about":
//     return <About />;
//   case "experience":
//     return <Experience />;
// }
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.main {
  margin-left: 17rem; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 40px 50px;
}
</style>
