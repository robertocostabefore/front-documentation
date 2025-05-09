const body = document.body;

export function setBodyToDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-side');
}

export function setBodyToLightMode() {
    body.classList.remove('dark-side');
    body.classList.add('light-mode');
}

export function changeBodyColorScheme() {
  if (body.classList.contains('light-mode')) {
    setBodyToDarkMode()
  } else {
    setBodyToLightMode()
  }
}