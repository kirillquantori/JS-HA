class Button extends Component {
    constructor() {
        super();
        this.element = document.createElement('button');
    }

    /**
     * @override
     * @param props
     * @param props.text {string}
     * @param props.onClick {function}
     * @returns {HTMLElement}
     */
    render(props) {
        return super.render({
            id: props.id,
            onClick: props.onClick,
            children: [],
            class: props.class,
            htmltext: props.htmltext,
            style: props.style
        });
    }
}

class List extends Component {
    constructor() {
        super();
        this.element = document.createElement('ul');
    }

    /**
     * @override
     * @param props
     * @param props.items {string[]}
     * @param props.additem {function}
     * @returns {HTMLElement}
     */
    render(props) {
        return super.render({
            children: [...props.items.map(item => {
                return new Listitem().render({children: item});
            }),
                new Button().render({
                    text: 'Add item',
                    onClick: props.additem,
                })
            ]
        });
    }
}

class Listitem extends Component {
    render(props) {
        return super.render({
            children: props.children
        });
    }
}
class DivElement extends Component {
    constructor() {
        super();
        this.element = document.createElement('div');
    }
    render(props) {
        return super.render({
            class: props.class,
            children: props.children,
            htmltext: props.htmltext,
            id: props.id,
            style: props.style
        });
    }
}
class Input extends Component {
    constructor() {
        super();
        this.element = document.createElement('Input');
    }
    render(props) {
        return super.render({
            id: props.id,
            children: [],
            value: props.value,
            placeholder: props.text,
            class: props.class,
            type: props.type,
            style: this.state.style,
            onInput: props.onInput,
            onChange: props.onChange,
            onSearch: props.onSearch,
            checked: props.checked
        });
    }
}
class Ticket extends Component {
    constructor() {
        super();
        this.element = document.createElement('Ticket');
    }
    render(props) {
        return super.render({
            id: props.id,
            htmltext: props.text,
            onClick: props.onClick,
            children: [],
            class: props.class,
            style: this.state.style
        });
    }
}