<template>
    <input type="text">1122
    <button class="btn">btn</button>
    <button class="btn-test">btn-test</button>
    <button class="icon-btn">icon-btn</button>
    <h2 class="test2 rounded-3xl">哈哈哈</h2>
    <h2 class="test2">哈哈哈</h2>
    <h2 class="test2">哈哈哈</h2>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    data: () => ({ visible: false }),
});
</script>

<style scoped>
.test2 {
    color: blue;
}

</style>
