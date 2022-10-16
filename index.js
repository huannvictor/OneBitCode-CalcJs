const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const copyButton =  document.getElementById('copyToClipboard')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(charKeyBtn => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value
    input.value += value

    restartCopyButton()
  })
})

input.addEventListener('keydown', (event) => {
  event.preventDefault()

  if(allowedKeys.includes(event.key)) {
    input.value += event.key
    return
  }

  if(event.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }

  if(event.key === "Enter") {
    calculate()
  }
})

function clear() {
  input.value = ''
  input.focus()
}

function restartCopyButton() {
  copyButton.classList.remove('success')
  copyButton.innerText = 'Copy'
}

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
  clear()
}

document.getElementById('clear').addEventListener('click', () => (clear(), restartCopyButton()))
document.getElementById('equal').addEventListener('click', () => (calculate(), restartCopyButton()))

document. getElementById('themeSwitcher').addEventListener('click', () => {
  if(main.dataset.theme === "dark") {
    root.style.setProperty('--bg-color', '#ccc')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#333')
    root.style.setProperty('--primary-color', '#1db055')

    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#333')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#ccc')
    root.style.setProperty('--primary-color', '#4dff91')

    main.dataset.theme = 'dark'
  }
})

copyButton.addEventListener('click', event => {
  const button = event.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    
    navigator.clipboard.writeText(resultInput.value)
  }
})