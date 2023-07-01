//console.log('dark mode');

const LIGHT_MODE = 'light'
const DARK_MODE = 'dark'
const buttonTheme = document.getElementById('button-dark-light')

if (window.matchMedia('(prefers-color-schame)').media === 'not all') {
    alert('Maaf browser tidak mendukung mode DarkMode')
}

const isDarkModeEnable = window.matchMedia('(prefers-color-schame: dark)');
isDarkModeEnable.addEventListener('change', (e) => {
    const isDarkMode = e.matches
    console.log(`Dark mode is ${darkModeOn ? 'on' : 'off'}.`);
})

const chooseTheme = () => {
    console.log('chooseTheme')
    const currentTheme = localStorage.getItem('mode')
    if (currentTheme === 'light') {
        document.documentElement.className = DARK_MODE
        localStorage.setItem('mode', DARK_MODE)
        return
    }
    document.documentElement.className = LIGHT_MODE
    localStorage.setItem('mode', LIGHT_MODE)
}

const loadThemesOnRefresh = () => {
    const currentTheme = localStorage.getItem('mode')
    if(currentTheme) {
        document.documentElement.className = currentTheme
        return
    }
}

buttonTheme.addEventListener('click', chooseTheme)
window.addEventListener('load', loadThemesOnRefresh)