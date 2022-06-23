import { html, css, LitElement } from 'lit'


export class LitButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `
  }

  static get properties() {
    return {
      title: { type: String },

    }
  }

  constructor() {
    super();
    this.title = 'Title';
  }

  render() {
    return html`
      <button @click=${this._onClick} class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        ${this.title}
      </button>
    `
  }

  _onClick() {
    this.count++
  }
}

window.customElements.define('lit-button', LitButton)
