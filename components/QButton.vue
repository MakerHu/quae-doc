<template>
  <button class="quae-button" :class="type" @touchstart="" @click="onClick">
    <slot> 按钮 </slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    // 可选值：high-low high-shallow flat-shallow low-shallow
    type: String,
    default: "high-shallow",
  },
});

const onClick = () => {};
</script>

<style scoped>
.quae-button {
  background: var(--quae-color-background);
  text-shadow: var(--quae-text-inner-shadow);
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.high-low {
  box-shadow: var(--quae-box-shadow-high);
}

.high-low:active {
  box-shadow: var(--quae-box-shadow-low);
}

.high-shallow {
  box-shadow: var(--quae-box-shadow-high);
}

.high-shallow:active {
  box-shadow: var(--quae-inner-shadow-shallow);
}

.flat-shallow {
  border: solid 0.1px var(--quae-border-color);
}

.flat-shallow:active {
  box-shadow: var(--quae-inner-shadow-shallow);
  border: solid 0.1px var(--quae-color-background);
}

.low-shallow {
  box-shadow: var(--quae-box-shadow-low);
}

.low-shallow:active {
  box-shadow: var(--quae-inner-shadow-shallow);
}
</style>
