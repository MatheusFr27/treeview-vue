<template>
  <main>
    <h1>Tree view</h1>
    <div class="content">
      <div class="content-treeview">
        <TreeView :nodes="files" />
      </div>
      <div class="content-treeview-text">
        <p v-if="node.data && node.data.description">
          {{ node.data.description }}
        </p>
        <p v-else>Nenhuma informação guardada neste arquivo.</p>
      </div>
    </div>
  </main>
</template>

<script>
import TreeView from "./components/TreeView.vue";

export default {
  name: "App",
  components: {
    TreeView,
  },
  data() {
    return {
      files: [
        {
          id: 1,
          name: "Folder 1",
          type: "folder",
          node: [
            {
              id: 2,
              name: "File 1",
              type: "file",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ex modi suscipit consectetur. Nostrum, alias.",
            },
          ],
        },
        {
          id: 3,
          name: "Folder 2",
          type: "folder",
          node: [
            {
              id: 4,
              name: "File 3",
              type: "file",
              description:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ex modi suscipit consectetur. Nostrum, alias.",
            },
            {
              id: 5,
              name: "File 4",
              type: "file",
              description: "teste arquivo 4",
            },
            {
              id: 6,
              name: "Folder 3",
              type: "folder",
              node: [
                {
                  id: 7,
                  name: "File 5",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "Folder 3",
          type: "folder",
          node: [
            {
              id: 9,
              name: "File 6",
              type: "file",
            },
            {
              id: 10,
              name: "File 7",
              type: "file",
            },
            {
              id: 11,
              name: "Folder 4",
              type: "folder",
              node: [
                {
                  id: 12,
                  name: "File 8",
                  type: "file",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    node: {
      get() {
        return this.$store.getters["treeview/getNode"];
      },
    },
  },
};
</script>

<style>
body {
  background-color: rgb(245, 245, 245);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0px 6px rgba(155, 155, 155, 0.562);

  width: 90%;
  height: 300px;

  background-color: rgb(255, 255, 255);
}

.content-treeview {
  background-color: rgb(241, 241, 241);

  width: 30%;
  height: 100%;

  overflow: scroll;
}

.content-treeview-text {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
}
</style>
