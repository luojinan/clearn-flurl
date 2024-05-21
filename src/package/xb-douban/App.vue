<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { removeDomByList } from '../../common/utils';
import { NOT_NEED_LIST, filterCommentText } from "../douban-group/const";

const removeComment = () => {
  let count = 0
  document.querySelectorAll('.c-neirong').forEach((dom) => {
    const list = dom.childNodes
    list.forEach((item) => {
      if (item.nodeType === Node.TEXT_NODE && item.nodeValue) {
        item.nodeValue = item.nodeValue?.replace(filterCommentText, '')
        if (!item.nodeValue || ['d', 'D', '牛', '，', ','].includes(item.nodeValue)) {
          count++
          dom.closest('.ul')?.remove()
        }
      }
    })
  })
  return count
}

interface QaItem {
  question?: string | null
  answer?: string | null
}
const todoubanWithAnswer = (): QaItem[] => {
  const questionList: QaItem[] = []
  document.querySelectorAll('.g-biaoti').forEach(item => {
    questionList.push({
      question: item.textContent
    })
  })
  document.querySelectorAll('.g-neirong').forEach((neifongDom, index) => {
    const nrDom = neifongDom as HTMLElement
    questionList[index].answer = nrDom.outerText.split('\n').filter(item => !!item.trim() && !item.includes('智能AI助手')).join('')
  })
  return questionList
}

const count = ref(0)
const clearWeb = () => {
  const strList = ['.nav2-ul', '.article-list.top', '.pop-hongbao-on', '.tishi', '.xiangguan', 'aside', '#commentbox', '.footer']
  removeDomByList(strList)
  // 移除元素 如fl链接是异步生成的，此时可能没有移除成功，1s后尝试二次移除
  setTimeout(() => {
    removeDomByList(strList)
  }, 1000);
  document.querySelector('.copyright')?.parentElement?.remove()

  document.querySelector('.art-copyright a')?.setAttribute('target', '_self');

  let num = 0
  const zoyeList = document.querySelectorAll('.article-list .title a')
  if (zoyeList.length) {
    zoyeList.forEach((item) => {
      item.setAttribute('target', '_self')
      const dom = item as HTMLElement
      const isNoNeed = NOT_NEED_LIST.some((noNeed) => dom.innerText.includes(noNeed))
      if (isNoNeed) {
        num += 1
        dom.closest('.article-list')?.remove()
      }
    })
  } else {
    num = removeComment()
  }
  count.value = num
}

onMounted(() => {
  console.log('✨ xb douban 脚本 ✨')
  clearWeb()

  const qaList = todoubanWithAnswer()
  const originA = document.querySelector('.art-copyright a')
  const originHref = originA?.getAttribute('href'); // 获取原始的 href
  console.log('设置新链接', originHref)
  originA?.setAttribute('href', `${originHref}?qa=${encodeURIComponent(JSON.stringify(qaList))}`);
  if (originHref) {
    window.location.replace(`${originHref}?qa=${encodeURIComponent(JSON.stringify(qaList))}`)
  }
})

</script>

<template>
  <div class="fixed bottom-8 right-2 btn btn-primary">
    ✨ 已移除不感兴趣作业{{ count }}条
  </div>
</template>
