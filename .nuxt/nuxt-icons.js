export default async function (ctx, inject) {
  const icons = {"16x16":"https://cdn.hooyim.com/_nuxt/icons/icon_16.a26888.png","120x120":"https://cdn.hooyim.com/_nuxt/icons/icon_120.a26888.png","144x144":"https://cdn.hooyim.com/_nuxt/icons/icon_144.a26888.png","152x152":"https://cdn.hooyim.com/_nuxt/icons/icon_152.a26888.png","192x192":"https://cdn.hooyim.com/_nuxt/icons/icon_192.a26888.png","384x384":"https://cdn.hooyim.com/_nuxt/icons/icon_384.a26888.png","512x512":"https://cdn.hooyim.com/_nuxt/icons/icon_512.a26888.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
