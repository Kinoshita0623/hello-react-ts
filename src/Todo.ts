

export default class Todo {
    id: number;
    title: string;
    text: string;
    complete: boolean;

    constructor(id: number, title: string, text?: string, complete: boolean = false) {
        this.id = id;
        this.title = title;
        this.text = text ?? '';
        this.complete = complete;
    }
}