import { LightningElement, api, track } from 'lwc';

export default class App extends LightningElement {
    @track dynamicCtor;
    @api id;

    @track customCtor;

    async handleSubmitQuestion() {
        const ctor = await import("my/questionPublisher");
        this.customCtor = ctor.default;
    }
}
