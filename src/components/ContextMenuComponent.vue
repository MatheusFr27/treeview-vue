<template>
  <div
    @mouseleave="closeContext()"
    v-if="node.position.y && node.position.x"
    class="context-menu"
    :style="`position: absolute; top: ${node.position.y}px; left: ${node.position.x}px;`"
  >
    <button>
      <SvgIcon
        style="margin-right: 0.2em"
        type="mdi"
        :path="icons.folderPlus"
      />
      Adicionar
    </button>
    <button>
      <SvgIcon
        style="margin-right: 0.2em"
        type="mdi"
        :path="icons.folderEdit"
      />
      Editar
    </button>
    <button>
      <SvgIcon
        style="margin-right: 0.2em"
        type="mdi"
        :path="icons.folderRemove"
      />
      Excluir
    </button>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiFolderPlus, mdiFolderEdit, mdiFolderRemove } from "@mdi/js";

export default {
  name: "ContextMenuComponent",
  components: {
    SvgIcon,
  },
  data() {
    return {
      icons: {
        folderPlus: mdiFolderPlus,
        folderEdit: mdiFolderEdit,
        folderRemove: mdiFolderRemove,
      },
    };
  },
  methods: {
    closeContext() {
      const data = {
        data: {},
        position: {
          y: null,
          x: null,
        },
      };

      this.$store.dispatch("treeview/setNode", data);
    },
  },
  computed: {
    node: {
      get() {
        return this.$store.getters["treeview/getNode"];
      },
      set(value) {
        this.$store.dispatch("treeview/setNode", value);
      },
    },
  },
};
</script>

<style scoped>
.context-menu {
  box-shadow: 1px 1px 4px black;
  background-color: white;
  padding: 0.7em;

  display: flex;
  flex-direction: column;
}

button {
  border: none;
  background-color: transparent;
  margin: 0.5em 0em;

  display: flex;
  flex-direction: row;
  align-items: center;
}

button:hover {
  background-color: #e7e7e7;
}
</style>
