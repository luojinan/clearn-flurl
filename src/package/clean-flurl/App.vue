<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { cleanHtml, getUrlParams } from '../../common/utils';

const urlParams = getUrlParams() as {
  id: string
}
const isFlUrl = ref(Object.keys(urlParams).length>1)

const isJingFenUrl = ref(location.host.includes('jingfen'))

const msg = ref('检测到 fl 链接，请前往干净链接查看')

onMounted(() => {
  console.log('✨ clean flurl 脚本 ✨')
  if(isJingFenUrl.value) {
    msg.value = '检测到返利优惠券，请前往干净链接自己转优惠券'
    setTimeout(() => {
      const goodNameDom = document.querySelector('.name') as HTMLElement

      goodNameDom && (msg.value = `${msg.value} ${goodNameDom?.innerText}`)
    }, 400);
  }
  if(isFlUrl.value) {
    // 移除所有非脚本的dom 包括script
    if(isJingFenUrl) {
      setTimeout(() => {
        cleanHtml()
      }, 500);
    }else{
      cleanHtml()
    }
  }
})

const toCleanUrl = ()=>{
  const [originUrl] = location.href.split('?')
  if(location.host.includes('jd')) {
    location.href = `${originUrl}?utm=`
    return
  }
  location.href = `${originUrl}?id=${urlParams.id}`
}

</script>

<template>
  <div v-if="isFlUrl" class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-neutral-800 text-white">
    <p>{{ msg }}</p>
    <button v-if="!isJingFenUrl" class="btn btn-primary mt-10" @click="toCleanUrl">前往干净链接</button>
  </div>
</template>

