<template>
  <section>
    <div v-if="nodes">
      <TreeViewComponent v-for="node in nodes" :key="node.id" :node="node" />
    </div>

    <ContextMenuComponent />
  </section>
</template>

<script>
import ContextMenuComponent from "./ContextMenuComponent.vue";
import TreeViewComponent from "./TreeViewComponent.vue";

export default {
  name: "TreeView",
  components: {
    TreeViewComponent,
    ContextMenuComponent,
  },
  props: {
    nodes: {
      type: Array,
      default: null,
      require: true,
    },
  },
};
</script>
