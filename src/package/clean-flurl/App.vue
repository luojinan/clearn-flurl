<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { cleanHtml, getUrlParams } from '../../common/utils';

const urlParams = getUrlParams() as {
  id: string
}
const isFlUrl = ref(Object.keys(urlParams).length>1)

onMounted(() => {
  console.log('✨ clean flurl 脚本 ✨')
  if(isFlUrl.value) {
    // 移除所有非脚本的dom 包括script
    cleanHtml()
  }
})

const toCleanUrl = ()=>{
  const [originUrl] = location.href.split('?')
  location.href = `${originUrl}?id=${urlParams.id}`
}

</script>

<template>
  <div v-if="isFlUrl" class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center  bg-neutral-800 text-white">
    <p>检测到 fl 链接，请前往干净链接查看</p>
    <button class="btn btn-primary mt-10" @click="toCleanUrl">前往干净链接</button>
  </div>
</template>

