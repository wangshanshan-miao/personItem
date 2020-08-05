<template>
    <div class="box">
        <m-nav></m-nav>
    </div>
</template>

<script>
import mNav from '@/components/nav.vue'
export default {
  name: 'app',
  components: { mNav }
}
</script>

<style lang="scss" scoped>
.box {
    background: #383838;
    padding-top: 20px;
}
</style>
