const filterButton = document.querySelector('.button__filter')
const resetFilterButton = document.querySelector('.button__reset-filter')
const additionalFilter = document.querySelector('.filter__additional')
const table = document.querySelector('.table')

const openAdditionalFilter = () => {
    filterButton.classList.toggle('buttons_not-filled');
    additionalFilter.classList.toggle('active');
    table.classList.toggle('active-filter');
    resetFilterButton.classList.toggle('active');
}

filterButton.addEventListener('click', () => openAdditionalFilter())

const chooseThemeButton = document.querySelector('.button-choose-theme')
const chooseThemeDropdown = document.querySelector('.dropdown_choose-theme')

chooseThemeButton.addEventListener('click', () => chooseThemeDropdown.classList.toggle('active'))

const lightThemeTitle = document.querySelector('.theme-title_light')
const darkThemeTitle = document.querySelector('.theme-title_dark')
const buttonThemeLight = document.querySelector('.button_change-to-light')
const buttonThemeDark = document.querySelector('.button_change-to-dark')
const changeTheme = (event) => {
    if (lightThemeTitle.classList.contains('active')) {
        document.body.style.setProperty('--font-color', '#BCC4CC')
        document.body.style.setProperty('--background-color', '#2B2D33')
        document.body.style.setProperty('--dim-elements-color', '#454E52')
        document.body.style.setProperty('--additional-filter-background-color', '#171B1F')
        document.body.style.setProperty('--table-item-border-color', '#171B1F')
        buttonThemeLight.classList.toggle('buttons_not-filled')
        buttonThemeDark.classList.toggle('buttons_not-filled')
        buttonThemeLight.classList.toggle('active')
        buttonThemeDark.classList.toggle('active')
        lightThemeTitle.classList.toggle('active')
        darkThemeTitle.classList.toggle('active')
    } else {
        document.body.style.setProperty('--font-color', '#000000')
        document.body.style.setProperty('--background-color', '#FFFFFF')
        document.body.style.setProperty('--dim-elements-color', '#BAD8F5')
        document.body.style.setProperty('--additional-filter-background-color', '#EBF0F5')
        document.body.style.setProperty('--table-item-border-color', '#EBF0F5')
        buttonThemeLight.classList.toggle('buttons_not-filled')
        buttonThemeDark.classList.toggle('buttons_not-filled')
        buttonThemeLight.classList.toggle('active')
        buttonThemeDark.classList.toggle('active')
        lightThemeTitle.classList.toggle('active')
        darkThemeTitle.classList.toggle('active')
    }
}
buttonThemeLight.addEventListener('click', (e) => changeTheme(e))
buttonThemeDark.addEventListener('click', (e) => changeTheme(e))






