/**
 * 获取URL查询参数。
 * @param key 如果提供了key，则返回对应键值的参数值；否则返回所有参数组成的对象。
 * @returns 如果提供了key，则返回字符串类型的参数值；否则返回一个记录所有参数及对应值的对象。
 */
export const getUrlParams = (key?:string): string | Record<string, string> => {
  const searchParams = new URLSearchParams(window.location.search); // 创建一个URLSearchParams实例，用于解析当前URL的查询字符串。
  if(key) {
    // 如果提供了key，尝试获取对应参数值并返回，如果不存在则返回空字符串。
    return searchParams.get(key) || '';
  }
  const paramsObject: Record<string, string> = {}; // 用于存储所有参数的对象。
  // 遍历所有参数，将它们存入paramsObject对象中。
  searchParams.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject // 返回包含所有参数及对应值的对象。
};