<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUrlParams, removeDomByList } from '../../common/utils';
import { filterCommentText } from "./const";

const fixPhone = () => {
  const body = document.querySelector('body')
  if (body) {
    body.style.boxSizing = 'border-box'
    body.style.width = '100vw'
    body.style.maxWidth = '800px'
    body.style.padding = '10px 10px 0 10px'
  }

  const a = document.querySelector('.topic-content') as HTMLElement
  if (a) {
    a.style.display = 'flex'
    a.style.flexDirection = 'column';
  }

  const wrapper = document.getElementById('wrapper')
  if (wrapper) {
    wrapper.style.width = '100%'
  }
  const doc = document.querySelector('.topic-doc') as HTMLElement
  if (doc) {
    doc.style.width = '100%'
    doc.style.padding = '10px'
    doc.style.boxSizing = 'border-box'
  }
}

const removeAd = () => {
  const contentDiv = document.getElementById('content');
  const articleDiv = document.querySelector('.article');

  // 确保目标元素存在
  if (articleDiv && contentDiv) {
    // 移动元素
    contentDiv.appendChild(articleDiv);
  }

  const strList = ['.grid-16-8', '.sns-bar', '#db-nav-group', '#db-global-nav', '.comment-form', '#footer', '#landing-bar', '.txd']
  removeDomByList(strList)
}

// 移除无效评论dom
const removeComment = () => {
  let count = 0
  document.querySelectorAll('.reply-content').forEach((item) => {
    const dom = item as HTMLElement
    const content = dom.innerText.replace(filterCommentText, '')
    if (!content || ['d', 'D', '牛', '，', ','].includes(content)) {
      count++
      dom.parentElement?.parentElement?.remove()
    }
    else { dom.innerText = content }
  })
  return count
}

const setQa = ()=>{
  const qaData = getUrlParams('qa') as string
  if (qaData) {
    const qaList = JSON.parse(qaData)
    setTimeout(() => {
      document.querySelectorAll('.question-content').forEach((item, index) => {
        if (qaList[index]) {
          item.innerHTML = qaList[index].answer
        }
      })
    }, 600);
  }
}

const count = ref(0)

onMounted(() => {
  console.log('✨ douban-group 脚本 ✨')

  fixPhone()
  removeAd()
  count.value = removeComment()
  setQa()
})
</script>

<template>
  <div class="fixed bottom-8 right-2 btn btn-primary">
    ✨ 已移除无效评论{{count}}条
  </div>
</template>

