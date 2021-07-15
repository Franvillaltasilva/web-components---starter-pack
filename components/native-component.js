class NativeComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const heading = document.createElement('h1');
      heading.innerHTML = 'Hello world';
  
      shadowRoot.appendChild(heading);
    }
  }
  customElements.define('native-component', NativeComponent);