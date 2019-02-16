// Final Message
const getFinalMessage = () => {
  const ele = document.getElementById('final_message');

  return {
    ...displayFuncFactory(ele),
    setMessage: (message) => { ele.textContent = message }
  }
}
