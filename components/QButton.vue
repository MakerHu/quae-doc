<template>
  <button class="quae-button" :class="type" @click="onClick">
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

const onClick = () => {
  
};
</script>

<style scoped>
.quae-button {
  background: var(--quae-color-background);
  text-shadow: var(--quae-text-inner-shadow);
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
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

.flat-shallow:active {
  box-shadow: var(--quae-inner-shadow-shallow);
}

.low-shallow {
  box-shadow: var(--quae-box-shadow-low);
}

.low-shallow:active {
  box-shadow: var(--quae-inner-shadow-shallow);
}
</style>

<style>
:root {
  --quae-color-text-blue: rgba(0, 102, 204, 0.7);
  --quae-color-text-grey: #757575;
  --quae-color-background: #ededed;
  --quae-box-shadow-high: 2px 2px 4px #c9c9c9, -2px -2px 4px #ffffff;
  --quae-box-shadow-low: 1px 1px 2px #c9c9c9, -1px -1px 2px #ffffff;
  --quae-inner-shadow-shallow: inset 1px 1px 3px #c9c9c9,
    inset -1px -1px 3px #ffffff;
  --quae-inner-shadow-deep: inset 2px 2px 5px #c9c9c9,
    inset -2px -2px 5px #ffffff;
  --quae-text-inner-shadow: 1px 3px 6px #fff, 0 0 0 #000, 1px 3px 6px #fff;
}
</style>
