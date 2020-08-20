/**
 * @file Route transformer / ES module
 * @module transforms/route
 * @author Hooyim <https://github.com/yah0130>
 */

export const getArticleDetailRoute = (articleID: string | number) => {
  return `/article/${articleID}`
}
