<template>
  <div>
    <button
      @mousedown="options($event, node)"
      v-if="node.type == 'folder'"
      @click="open = !open"
      class="node"
    >
      <SvgIcon type="mdi" :path="pathIcons[open ? 'folderOpen' : 'folder']" />
      <h3 class="name">{{ node.name }}</h3>
    </button>
    <button
      v-else
      class="node"
      @click="openFile(node)"
      @mousedown="options($event, node)"
    >
      <SvgIcon type="mdi" :path="pathIcons[node.type]" />
      <h3 class="name">{{ node.name }}</h3>
    </button>
    <template v-if="open">
      <TreeViewComponent
        class="node-child"
        v-for="children in node.node"
        :key="children.id"
        :node="children"
      />
    </template>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiFile, mdiFolder, mdiFolderOpen } from "@mdi/js";

export default {
  name: "TreeViewComponent",
  components: { SvgIcon },
  props: {
    node: Object,
  },
  data() {
    return {
      open: false,
      positionOfClick: {
        y: 0,
        x: 0,
      },

      pathIcons: {
        folder: mdiFolder,
        folderOpen: mdiFolderOpen,
        file: mdiFile,
      },
    };
  },
  methods: {
    options(event, node) {
      document.addEventListener("contextmenu", (e) => e.preventDefault());

      if (event.button == 2) {
        const data = {
          data: node,
          position: {
            y: event.clientY,
            x: event.clientX,
          },
        };

        return this.$store.dispatch("treeview/setNode", data);
      }
    },
    openFile(node) {
      const data = {
        data: node,
        position: {
          y: null,
          x: null,
        },
      };

      this.$store.dispatch("treeview/setNode", data);
    },
  },
};
</script>

<style scoped>
.node {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name {
  margin-left: 0.2em;
  margin: 0.5em;
}

.node-child {
  margin-left: 25px;
}

button {
  background-color: transparent;
  border: none;
}

button:hover {
  cursor: pointer;
  color: black;
  border-radius: 15px;

  animation: renderBackgroundButton 0.3s ease-in-out forwards;
}

@keyframes renderBackgroundButton {
  0% {
    background-color: transparent;
  }

  100% {
    background-color: #e7e7e7;
  }
}
</style>
