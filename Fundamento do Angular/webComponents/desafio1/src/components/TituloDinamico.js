class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const componentRoot = document.createElement('h1');
    componentRoot.textContent = 'Felipe';

    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    shadow.appendChild(componentRoot);
    shadow.append(style);
  }
}

customElements.define('titulo-dinamico', TituloDinamico);
