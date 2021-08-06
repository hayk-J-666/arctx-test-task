var switcherBTN = document.getElementById('switcher')
var main = document.getElementsByTagName('html')[0]
let lang = main.getAttribute('lang')
let item = document.querySelector('.menu__container')
let langueges = [
  {
    name: 'en',
    depozit: 'depozit',
    bettingRules: 'betting rules',
    FAQ: 'FAQ',
  },
  {
    name: 'ko',
    depozit: '충전',
    bettingRules: '스포츠 배팅룰',
    FAQ: 'FAQ',
  },
]

function getLanguage() {
  return langueges.map((langugae) => {
    if (langugae.name === lang) {
      return (item.innerHTML = `
       <li class="menu__item">
      <span class="menu__icon"></span>
      <a href="#" class="menu__link">${langugae.depozit}</a>
    </li>
    <li class="menu__item">
      <span class="menu__icon"></span>
      <a href="#" class="menu__link">${langugae.bettingRules}</a>
    </li>
    <li class="menu__item">
      <span class="menu__icon"></span>
      <a href="#" class="menu__link">${langugae.FAQ}</a>
    </li>
    <li class="menu__item">
      <span class="menu__icon"></span>
      <a href="#" class="menu__link"
        ><img src="./icons/bonus.png" class="bonus_img" alt='bonus box img'
      /></a>
    </li>`)
    }
  })
}

function print() {
  switcherBTN.classList.toggle('icon-cheveron-right')
}
