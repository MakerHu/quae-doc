<template>
    <ExamplePanel>
        <q-button type="high-low">高低按钮</q-button>
        <q-button type="high-shallow">凹凸按钮</q-button>
        <q-button type="low-shallow">浅凹凸按钮</q-button>
        <q-button type="flat-shallow">内陷按钮</q-button>
    </ExamplePanel>
</template>

<script setup>
import ExamplePanel from './ExamplePanel.vue' 
import QButton from '../components/QButton.vue'
</script>

<style scoped>

</style>