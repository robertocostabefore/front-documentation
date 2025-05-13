const body = document.body;
const themes = {
  dark: 'dark-side',
  light: 'light-mode'
}

export function setBodyToDarkMode() {
  body.classList.remove(themes.light);
  body.classList.add(themes.dark);
  sessionStorage.setItem('theme', themes.dark);
}

export function setBodyToLightMode() {
  body.classList.remove(themes.dark);
  body.classList.add(themes.light);
  sessionStorage.setItem('theme', themes.light);
}

export function initBodyTheme() {
  const theme = sessionStorage.getItem('theme') || themes.light;

  body.classList.add(theme);
}

export function changeBodyColorScheme() {
  if (body.classList.contains(themes.light)) {
    setBodyToDarkMode()
  } else {
    setBodyToLightMode()
  }
}