// Radios
window.getRadios = () => {
  const ele = document.getElementById('radios');
  const radio = {};
  for (const input of ele.querySelectorAll('input[type="radio"]')) {
    radio[input.value] = input;
  }

  const getMode = () => ele.querySelector('input[name="panel"]:checked').value;
  let prev = getMode();  // init
  let onSelect;

  return {
    ...displayFuncFactory(ele),

    select: (mode) => {
      if (!(mode in radio)) {
        console.error(`Unknown mode ${mode}`);
        return;
      }

      // select radio button
      radio[mode].checked = true;
      onSelect(prev, mode);
      prev = mode;
    },

    onSelect: (callback) => {
      onSelect = callback;
      ele.addEventListener('change', () => {
        const value = getMode();
        onSelect(prev, value);
        prev = value;
      });
    }
  };
}
