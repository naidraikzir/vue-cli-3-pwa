<template>
  <div>
    <h2>Foo</h2>
    <h4>Scroll me dude 👇</h4>
    <h2 style="margin-top: 2000px">Yo Hah 👋</h2>
    <pre>{{ platform }}</pre>
  </div>
</template>

<script>
import platform from 'platform';

export default {
  data: () => ({
    platform,
  }),
}
</script>
