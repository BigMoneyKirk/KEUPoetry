export class NavItem {
    constructor(name?: string, id?: string, _class?: string, dot_class?: string) {
        this.name = name;
        this.id = id;
        this._class = _class;
        this.dot_class = dot_class;
    }

    public name?: string;
    public id?: string;
    public _class?: string;
    public dot_class?: string;
}