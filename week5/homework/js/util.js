// 1. show
window.show = (ele, bool = true) => {
  const action = bool ? 'remove' : 'add';
  ele.classList[action]('hide');
}

// 2. hide
window.hide = (elememts) => {
  show(elememts, false);
}

// 3. displayFuncFactory
window.displayFuncFactory = (ele) => {
  return {
    show: (bool) => { show(ele, bool) },
    hide: () => { show(ele, false) }
  }
}

// 4. addEventListenerAll
window.addEventListenerAll = (elements, eventName, callback) => {
  for (const ele of elements) {
    ele.addEventListener(eventName, callback);
  }
}
