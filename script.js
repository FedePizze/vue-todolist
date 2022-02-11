const app = new Vue({

        el: '#app',
        data: {
            toDoArrey: [],
            toDoText: '',
            barrato: '',
        },

        methods: {

            add() {
                if (this.toDoText == ''){

                    this.toDoText = ''
                } else {

                    this.toDoArrey.push(this.toDoText),
                    this.toDoText = ''
                }
                
            },

            removeItem(index) {
                this.toDoArrey.splice(index, 1)
            },

            

            barra() {
                if(this.aaa == true) {

                    this.aaa = false
                    this.barrato = 'barrato'

                } else {

                    this.aaa = true
                    this.barrato = 'nonBarrato'
                    
                }
            },

        },
})