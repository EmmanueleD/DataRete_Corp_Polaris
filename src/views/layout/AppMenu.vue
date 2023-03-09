<template>
  <div class="sidebar no-scrollbar">
    <div
      class="sidebar-header d-flex justify-content-between align-items-center"
    >
      <div @click="$router.push('/')" class="logo-image cursor-pointer">
        <img
          class="logo-menu"
          style="width: 172px; margin-top: 15px"
          src="../../assets/images/logo.png"
        />
      </div>
      <i @click="$emit('menu-toggle')" class="double-arrow left"></i>
    </div>

    <div v-for="(group, i) of model" :key="i">
      <div class="sidebar-group-lable">{{ group.group }}</div>
      <AppSubmenu
        :items="group.items"
        class="layout-menu"
        :root="true"
        @menuitem-click="onMenuItemClick"
      />
    </div>
  </div>
</template>

<script>
import AppSubmenu from "./AppSubmenu"
import { mapGetters } from "vuex"
export default {
  props: {
    model: Array,
  },

  methods: {
    onMenuItemClick() {
      this.$emit("menuitem-click")
    },
    onMenuToggle(event) {
      this.$emit("menu-toggle", event)
    },
  },
  components: {
    AppSubmenu: AppSubmenu,
  },
  computed: mapGetters(["company"]),
}
</script>

<style lang="scss">
.double-arrow {
  border: solid var(--cta-text-color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  cursor: pointer;
  color: var(--cta-text-color);

  &::after {
    content: "";
    position: absolute;
    padding: 5px;
    top: -6px;
    left: -6px;
    border: solid var(--cta-text-color);
    border-width: 0 3px 3px 0;
    color: var(--cta-text-color);
  }

  &.left {
    transform: rotate(135deg);
  }
}

.logo-image {
  img {
    filter: brightness(0) invert(1) !important;
  }
}
</style>
