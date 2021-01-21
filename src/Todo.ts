

export default class Todo {
    title: string;
    text: string;
    complete: boolean;

    constructor(title: string, text?: string, complete: boolean = false) {
        this.title = title;
        this.text = text ?? '';
        this.complete = complete;
    }
}