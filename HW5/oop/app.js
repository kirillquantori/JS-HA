class App extends Component {
    constructor() {
        super();
        this.state = {
            items: ['Task 1 Title', 'Task 2 Title', 'Task 3 Title'],
            completeItems: ['Completed Task 1 Title', 'Completed Task 2 Title']
        };
        if (localStorage.getItem("initTasks")) {
            this.state.items = localStorage.getItem("initTasks").split(";");
        };
        if (localStorage.getItem("initComplete")) {
            this.state.completeitems = localStorage.getItem("initComplete").split(";");
        };
        this.currentDate = new Date().toJSON().slice(0, 10).split("-").reverse().join(".");
        this.defaultsearch = undefined;
    }
    render(props) {
        let tasks = this.AddRows(this.state.items);
        let completetasks = this.AddCompleteRows(this.state.completeitems);
        localStorage.setItem("initTasks", this.state.items.join(";"));
        localStorage.setItem("initComplete", this.state.completeItems.join(";"));
        return super.render({
            id: 'oop',
            class: 'oop',
            children: [
                new DivElement().render({
                    id: 'shadow',
                    class: 'shadow',
                    children: [
                        new DivElement().render({
                            id: 'Newitem',
                            class: 'newitem',
                            children: [
                                new Ticket().render({
                                    id: 'NewitemTicket',
                                    text: 'Add New item',
                                    class: 'newitem_ticket',
                                    children: []
                                }),
                                new Input().render({
                                    id: 'NewitemInput',
                                    children: [],
                                    class: 'newitem_input',
                                    text: 'New Task',
                                    type: 'search',
                                    onSearch: this.NewTaskSearch,
                                    onInput: this.ApproveNewitem
                                }),
                                new DivElement().render({
                                    id: 'NewitemAddition',
                                    class: 'newitem_addition',
                                    children: [
                                        new DivElement().render({
                                            id: 'NewitemTags',
                                            class: 'newitem_tags',
                                            children: [
                                                new Ticket().render({
                                                    id: 'NewitemTag0',
                                                    class: 'tags_item tags_item-health',
                                                    text: 'health',
                                                    children: []
                                                }),
                                                new Ticket().render({
                                                    id: 'NewitemTag1',
                                                    class: 'tags_item tags_item-work',
                                                    text: 'work',
                                                    children: []
                                                }),
                                                new Ticket().render({
                                                    id: 'NewitemTag2',
                                                    class: 'tags_item tags_item-home',
                                                    text: 'home',
                                                    children: []
                                                }),
                                                new Ticket().render({
                                                    id: 'NewitemTag3',
                                                    class: 'tags_item tags_item-other',
                                                    text: 'other',
                                                    children: []
                                                })
                                            ]
                                        }),
                                        new Ticket().render({
                                            id: 'NewitemDate',
                                            class: 'newitem_date',
                                            text: this.currentDate,
                                            children: []
                                        })
                                    ]
                                }),
                                new DivElement().render({
                                    id: 'NewitemButtons',
                                    class: 'newitem_buttons',
                                    children: [
                                        new Button().render({
                                            id: 'NewitemButtonCancel',
                                            class: 'newitem_button newitem_button-cancel',
                                            htmltext: 'Cancel',
                                            onClick: this.CancelAction
                                        }),
                                        new Button().render({
                                            id: 'NewitemButtonApply',
                                            class: 'newitem_button newitem_button-apply newitem_button-enabled',
                                            htmltext: 'Add Task',
                                            onClick: this.Applyitem
                                        }),
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                new DivElement().render({
                    id: 'Container',                
                    class: 'container',
                    removeitem: this.removeitem,
                    children: [
                        new Ticket().render({
                            id: 'ToDoTicket',
                            text: 'To Do List',
                            class: 'headerTicket'
                        }),
                        new DivElement().render({
                            id: 'Header',
                            class: 'header',
                            children: [
                                new Input().render({
                                    id: 'SearchString',
                                    children: [],
                                    value: this.defaultsearch,
                                    class: 'header_search',
                                    text: 'Search Task',
                                    type: 'search',
                                    onInput: this.SearchEngine
                                }),
                                new Button().render({
                                    id: 'addButton',
                                    class: 'button_add',
                                    htmltext: '+ New Task',
                                    onClick: this.NewTask
                                })
                            ]
                        }),
                        new DivElement().render({
                            id: 'TaskContainer',
                            class: 'Tasks',
                            children: [
                                new DivElement().render({
                                    id: 'AllTasks',
                                    class: 'tasks_ticket',
                                    htmltext: 'All tasks',
                                    children: tasks 
                                }),
                                new DivElement().render({
                                    id: 'Completedtasks',
                                    class: 'tasks_ticket',
                                    htmltext: 'Completed tasks',
                                    children: completetasks 
                                })
                            ]
                        }),
                    ]              
                })
            ]
        });
    }
    SearchEngine = () => {
        let items = this.state.items, itemsComplete = this.state.completeItems, i;
        const searchString = document.getElementById("SearchString").value;
        this.defaultsearch = searchString;
        console.log(items);
        console.log(itemsComplete);
        for (i in items) {
            console.log(i);
            let element = document.getElementById("task_" + i);
            element.style.display = "none";
            if(items[i].toLowerCase().includes(searchString.toLowerCase()))
            {
                element.style.display = "flex";
            }     
        }
        for (i in itemsComplete) {
            let element = document.getElementById("Complete_" + i);
            element.style.display = "none";
            if (itemsComplete[i].toLowerCase().includes(searchString.toLowerCase())){
                element.style.display = "flex";
            }     
        }
    }
    additem = () => {
        const newitemInput = document.getElementById('NewitemInput');
        this.setState({
            items: [...this.state.items, 'item' + (this.state.items.length + 1)]
        });
        const shadow = document.getElementById("shadow");
        shadow.style.display = "none";        
    }
    Applyitem = () => {
        const newitemInput = document.getElementById("NewitemInput");
        this.setState({
            items: [...this.state.items, newitemInput.value]
        });
        const shadow = document.getElementById("shadow");
        shadow.style.display = "none"
    }
    removeitem = (element) => {
        let states = this.state.items;
        const parent = element.srcElement.parentElement.id;
        const ticket = parent.replace("task_", "tasksTicket_");
        const item = document.getElementById(ticket);
        const removed = states.splice(states.indexOf(item.innerHTML), 1);
        this.setState({
            items: [...states]
        });
        return removed[0];
    }
    removeCompleteditem = (element) => {
        let states = this.state.completeitems;
        const parent = element.srcElement.parentElement.id;
        const ticket = parent.replace("Complete_", "CompleteTicket_");
        const item = document.getElementById(ticket);
        const removed = states.splice(states.indexOf(item.innerHTML), 1);
        this.setState({
            completeitems: [...states]
        });
        return removed[0];
    }
    CancelAction = () => {
        const shadow = document.getElementById("shadow");
        shadow.style.display = "none"; 
    }
    NewTask = () => {
        const newitemButtonApply = document.getElementById('NewitemButtonApply');
        newitemButtonApply.classList.remove("newitem_button-enabled");
        newitemButtonApply.classList.add("newitem_button-disabled");
        newitemButtonApply.disabled = true;

        const shadow = document.getElementById("shadow");
        shadow.style.display = "flex"
        const newitem = document.getElementById('NewitemInput');
        newitem.value = '';
        newitem.focus();
    }
    NewTaskSearch = () => {
        console.log('test');
        const newitem = document.getElementById('NewitemButtonApply');
        newitem.disabled == false ? newitem.onclick.apply() : '';
    }
    AddRows = (items) => {
        let i;
        let rows = [];
        for (i in items) {
            rows.push(
                new DivElement().render({
                    class: 'tasks_order',
                    id: "task_" + i,
                    children: [
                        new Input().render({
                            id: 'TaskCheckBox_' + i,
                            children: [],
                            text: items[i],
                            class: 'task_checkbox',
                            type: 'checkbox',
                            onChange: this.itemComplete
                        }),
                        new DivElement().render({
                            id: 'TicketContainerTask' + i,
                            class: 'tasks_ticketcontainer',
                            children: [
                                new Ticket().render({
                                    id: 'tasksTicket_' + i,
                                    text: items[i],
                                    class: 'task_txt'
                                }),
                                new DivElement().render({
                                    id: 'TaskTagHolder_' + i,
                                    class: 'tasks_tagholder',
                                    children: [
                                        new Ticket().render({
                                            id: 'TaskTag_' + i,
                                            text: 'tag',
                                            class: 'tags_item tags_item-other'
                                        }),
                                        new Ticket().render({
                                            id: 'TaskTime_' + i,
                                            text: 'date',
                                            class: 'tags_item tags_item-time'
                                        })
                                    ]
                                })
                            ]
                        }),     
                        new Button().render({
                            id: 'TasksButton_' + i,
                            class: 'button_bin',
                            htmltext: '',
                            onClick: this.removeitem
                        })
                    ]
                })
            );
        }
        return rows;
    }
    AddCompleteRows = (items) => {
        let i;
        let rows = [];
        for (i in items) {
            rows.push(new DivElement().render({
                class: 'tasks_row',
                id: "Complete_" + i,
                children: [
                    new Input().render({
                        id: 'CompleteCheckBox_' + i,
                        children: [],
                        text: items[i],
                        class: 'task_checkbox',
                        type: 'checkbox',
                        onChange: this.itemUnComplete,
                        checked: "checked"
                    }),
                    new DivElement().render({
                        id: 'TicketContainerComplete_' + i,
                        class: 'tasks_ticketcontainer',
                        children: [
                            new Ticket().render({
                                id: 'CompleteTicket_' + i,
                                text: items[i],
                                class: 'task_txt task-complete'
                            }),
                            new DivElement().render({
                                id: 'CompleteTagHolder_' + i,
                                class: 'tasks_tagholder',
                                children: [
                                    new Ticket().render({
                                        id: 'CompleteTag_' + i,
                                        text: 'tag',
                                        class: 'tags_item tags_item-inactive'
                                    }),
                                    new Ticket().render({
                                        id: 'CompleteTime_' + i,
                                        text: 'time',
                                        class: 'tags_item tags_item-time'
                                    })
                                ]
                            })
                        ]
                    }),
                    new Button().render({
                        id: 'CompleteButton_' + i,
                        class: 'button_bin ',
                        htmltext: '',
                        style: "background: none"
                    })
                    ]
            }));
        }
        return rows;
    }
    ApproveNewitem = () => {
        const newitemInput = document.getElementById("NewitemInput");
        const newitemButtonApply = document.getElementById("NewitemButtonApply");
        if (newitemInput.value) {
            if (newitemButtonApply.classList.contains("newitem_button-disabled") == true) {
                newitemButtonApply.classList.remove("newitem_button-disabled");
            }
            if (newitemButtonApply.classList.contains("newitem_button-enabled") == false) {
             newitemButtonApply.classList.add("newitem_button-enabled");                      
            }
            newitemButtonApply.disabled = false;
        } else {
            if (newitemButtonApply.classList.contains("newitem_button-disabled") == false) {
                newitemButtonApply.classList.add("newitem_button-disabled");
            }
            if (newitemButtonApply.classList.contains("newitem_button-enabled") == true) {
             newitemButtonApply.classList.remove("newitem_button-enabled");                      
            }
            newitemButtonApply.disabled = true;
        }
    }
    itemComplete = (element) => {     
        let states = this.state.completeitems; 
        const newitem = this.removeitem(element);
        console.log(newitem);
        this.state.completeitems = [...states, newitem],
        this.setState({
            completeitems: [...states, newitem]
        });
    }
    itemUncomplete = (element) => {
        let states = this.state.items;
        const newitem = this.removeCompleteditem(element);
        console.log(newitem);
        this.setState({
            items: [...states, newitem]
        });
    }
}
document.body.appendChild(new App().render());