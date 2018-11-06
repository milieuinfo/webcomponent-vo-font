import { LitElement, html } from "@polymer/lit-element/lit-element";

/**
 * `vo-font`
 * De standaard font voor websites en applicaties van de Vlaamse overheid
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VoFont extends LitElement {
  render() {
    return html`
			<style>
				:host {
					font-family: Flanders Art;
				}
			</style>

			<slot></slot>
		`;
  }
}

customElements.define('vo-font', VoFont);