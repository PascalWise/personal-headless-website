<template>
  <div>
    <h1>Blog</h1>
    <p>Hier findest die alle meine Blogposts. Viel Spaß beim Lesen!</p>
    {{ posts }}
  </div>
</template>

<script setup lang="js">
  import {useAsyncData} from "#app";

  const { find } = useStrapi();

  const { data: posts } = await useAsyncData('posts', () => find('posts'), {
    transform: (data) => {
      if (data.data) {
        return data.data.map((post) => post.attributes);
      } else {
        return null;
      }
    }
  });

</script>

<style scoped lang="scss">


</style>