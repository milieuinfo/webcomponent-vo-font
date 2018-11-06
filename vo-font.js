import { LitElement, html } from "./assets/@polymer/lit-element/lit-element.js";

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
