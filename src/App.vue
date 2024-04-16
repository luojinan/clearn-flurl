<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { cleanHtml, getUrlParams } from './common/utils';

// https://detail.tmall.com/item.htm?id=626255378669&ali_trackid=2:mm_121082340_1321900169_114538200278:1713270585_009_859765471&union_lens=lensId:TAPI@1713258290@213c748d_1153_18ee626dc3c_788a@01;recoveryid:009_1107547825@1713270585572&ak=33956823&bxsign=tbkz7WDvfcfcGm0jrMKTJeA1lGDQphn7LBE-36PmsfSujdUAKiNIeGQ7gjiw0YRPdyFXRFTw1IesPvXNcSiLan7vp3TLMlJzE42agpnSXsMGif9cmCY8AwQkTG60EfG0f4cwcT2Afn3zzMs8sysEqwlBSLeUCO8RtHD5RnN-jlu7mFh5oP_lE2p1OfKQEu3Gkll
// https://main.m.taobao.com/security-h5-detail/home?id=626255378669&ali_trackid=2:mm_121082340_1321900169_114538200278:1713270599_086_1174981851&union_lens=lensId:TAPI@1713258290@213c748d_1153_18ee626dc3c_788a@01;recoveryid:086_1199847294@1713270599721&ak=33956823&bxsign=tbk3EjCZJ9UnwXTS8fccdWNWfWy7AMT5_S4ySc-Lp2oRRk-wIGitWt8Dav-mjhppcM1bskrpcgOSxaFxNgTxA_bovW6rRegPS-Sm2x5Hr-iN3zoBHOoxMoxAOKXIg4yDm47b-Xyx2yg358loiCpTM5iMqqO_R6S2_vFS3vwC8ixz6O6hcqze1MXA6UyoBTNH3NO&fromNormal=true
const urlParams = getUrlParams()
const isFlUrl = ref(Object.keys(urlParams).length > 1)
console.log(urlParams)


onMounted(() => {
  if (isFlUrl.value) {
    // 移除所有非脚本的dom 包括script
    // setTimeout(() => {
    //   cleanHtml()
    // }, 1000);
  }
})

const toCleanUrl = () => {
  if (location.host === 'uland.taobao.com') {
    const url = document.body.querySelector('a')?.href
    const params = getUrlParams('scm', url)
    const match = params.match(/item\|(.+?)\./);
    if (match) {
      const id = match[1];
      location.href = `https://detail.tmall.com/item.htm?id=${id}`
    }
    return
  }
  const [originUrl] = location.href.split('?')
  location.href = `${originUrl}?id=${urlParams.id}`
}

</script>

<template>
  <div v-if="isFlUrl" style="z-index: 999999;"
    class="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center  bg-neutral-800 text-white z-99">
    <p>检测到可能 fl 链接，请前往干净链接查看</p>
    <button class="btn btn-primary mt-10" @click="toCleanUrl">前往干净链接</button>
  </div>
</template>
