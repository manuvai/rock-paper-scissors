const ROCK = 0;
const PAPER = 1;
const SCISORS = 2;

var compare = (h1, h2) => {
    return (h1 + 2) % 3 == h2
}

var isNull = a => {
    return a === null
}

$(() => {
    new Vue({
        el: '#app',
        data() {
            return {
                user_choice: null,
                computer_choice: null,
            }
        },
        computed: {
            draw() {
                return this.user_choice === this.computer_choice
            },
            won() {
                return compare(this.user_choice, this.computer_choice)
            },
            lost() {
                return compare(this.computer_choice, this.user_choice)
            }
        },
        methods: {
            randomPick() {
                return Math.floor(Math.random() * 3)
            },
            pick(c) {
                this.user_choice = c
                this.computer_choice = null
            },
            play() {
                this.computer_choice = this.randomPick();
            },
            getType(t) {
                if (t === ROCK) {
                    return 'fas fa-hand-rock'
                } else if (t === PAPER) {
                    return  'fas fa-hand-paper'
                } else if (t === SCISORS) {
                    return  'fas fa-hand-scissors'
                }

                return '-'
            }
        },
        mounted() {
            
        }
    })
})