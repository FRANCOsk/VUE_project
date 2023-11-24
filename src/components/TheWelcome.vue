
<script setup lang="ts">
import {ref, reactive} from "vue";

const msgClass = ref("msg1")
const msg = ref( "Hello world")
const counter = reactive({count:0})
const condition = ref(true)

</script>
<template>

<h1 :class="msgClass">
 

 {{msg}}
 {{ counter.count }}
 

</h1>
<p v-if="condition">Teraz je true</p>
<p v-else>Teraz je false</p>
</template>

<style>
.msg1{
  
  background-color:yellow;


  }
</style>