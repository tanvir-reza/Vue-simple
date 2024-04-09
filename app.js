const app = Vue.createApp({
    data() {
        return {
        showMe: true,
        books: [
            {
            title: "Book 1",
            description: "My Book 1",
            img: "./media/1.jpg",
            is_fav: false,
            },
            {
            title: "Book 2",
            description: "My Book 2",
            img: "./media/2.jpg",
            is_fav: false,
            },
            {
            title: "Book 3",
            description: "My Book 3",
            img: "./media/3.png",
            is_fav: true,
            },
        ],
        };
    },
    methods: {
        changeTitle(arg) {
        this.title = "Data Changed";
        console.log(arg);
        },
        changeView() {
        this.showMe = !this.showMe;
        },
        fev_handle(book) {
            book.is_fav = !book.is_fav
        },
    },
    computed: {
        filterBooks() {
            return this.books.filter((book)=> book.is_fav)
        }
    }
});


app.mount('#base')