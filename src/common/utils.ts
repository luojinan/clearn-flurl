/**
 * 获取URL查询参数。
 * @param targetKey 如果提供了targetKey，则返回对应键值的参数值；否则返回所有参数组成的对象。
 * @returns 如果提供了targetKey，则返回字符串类型的参数值；否则返回一个记录所有参数及对应值的对象。
 */
export const getUrlParams = (targetKey?: string, url?: string): string | Record<string, string> => {
  const searchParams = new URLSearchParams(url || window.location.search); // 创建一个URLSearchParams实例，用于解析当前URL的查询字符串。
  if (targetKey) {
    // 如果提供了targetKey，尝试获取对应参数值并返回，如果不存在则返回空字符串。
    return searchParams.get(targetKey) || '';
  }
  const paramsObject: Record<string, string> = {}; // 用于存储所有参数的对象。
  // 遍历所有参数，将它们存入paramsObject对象中。
  searchParams.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject // 返回包含所有参数及对应值的对象。
};

// 怎么移除都排除不了自身，自身内容也会被移除，因为vue是通过js操作dom的，自身内容就是空的，需要还原得用js还原
export function cleanHtml() {

  // const headScripts = document.head.querySelectorAll('script');
  // headScripts.forEach(script => script.remove());

  // const scripts = document.querySelectorAll('script');
  // scripts.forEach(script => script.remove());

  const cleanDom = document.body.querySelector('#cleanurl');

  const elements = document.body.querySelectorAll('div');
  elements.forEach(element => element.remove());

  console.log(cleanDom);

  // const headScripts = document.head.querySelectorAll('script');
  // headScripts.forEach(script => script.remove());

  document.body.append(cleanDom!);
}
