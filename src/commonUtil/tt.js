/**
 * Created by chencc on 2018/9/20.
 */
let ms = {'hello': 'helllll'}
let key = 'hello'
let a = getItem(key)
console.log(ms['hello1'] || '78')
function getItem (key) {
  return key in ms ? ms[key] : ''
}
