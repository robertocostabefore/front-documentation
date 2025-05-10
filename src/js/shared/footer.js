import { changeBodyColorScheme } from "./changeColorScheme.js"

const footerHtmlElement = document.getElementById('footer')

const fetchFooterComponent = () => {
  fetch('./components/footer.html')
    .then(response => response.text())
    .then(html => {
      footerHtmlElement.innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar footer:', error));
}

const setBtnChangeBodySchemeFunction = () => {
  const buttonChangeColorScheme = document.getElementById('footer-btn-change-scheme');

  if (!buttonChangeColorScheme) {
    setTimeout(() => setBtnChangeBodySchemeFunction(), 100);
    return
  }

  buttonChangeColorScheme.addEventListener('click', changeBodyColorScheme);
}

const handleRenderFooter = async () => {
  fetchFooterComponent()

  setBtnChangeBodySchemeFunction()
}

export {
  handleRenderFooter
}