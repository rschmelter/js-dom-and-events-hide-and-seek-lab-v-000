function getFirstSelector(selector) {
  return document.querySelector(selector);


}

function nestedTarget() {
  return document.querySelector('#nested .target');

}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = ranked.length; i < l; i++) {
    let children = ranked[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }


  }
}
