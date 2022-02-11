const app = new Vue({

        el: '#app',
        data: {
            toDoArrey: [],
            toDoText: '',
        },

        methods: {

            add() {
                if (this.toDoText != ''){

                    const Obj = {
                        text: this.toDoText,
                        done: false
                    }

                    this.toDoArrey.push(Obj),
                    this.toDoText = ''

                }
            },

            removeItem(index) {
                this.toDoArrey.splice(index, 1)
            },

            barra(index) {
                this.toDoArrey[index].done = !this.toDoArrey[index].done
            },

        },
})