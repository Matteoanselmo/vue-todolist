const app = new Vue({
    el: '#app',
    data: {
        todoList: [
            // {
            //     text: '',
            //     done: false  
            // },
            // {
            //     text: '',
            //     done: false  
            // },
            // {
            //     text: '',
            //     done: false  
            // },
        ],
        newTodoContent: "",
    },

    methods: {
        addTodoElement(todoContent){
            if(todoContent.trim() != ""){
                const newtodoElement = {
                    text: todoContent.trim(),
                    done: true
                }
                this.todoList.push(newtodoElement);
                this.newTodoContent = "";
            }else{
                console.warn("la stringa è vuota IDIOTA!")
            }
        },
        removeTodoElement(todoIndex){
            if(this.todoList[todoIndex] != undefined){
                this.todoList.splice(todoIndex, 1);
            } else {
                console.warn('Vuoi rimuover un oggeto che non esiste')
            }
        },
    }
})


