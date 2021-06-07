// Import all models, or one model ... whatever you're going to be using this for
const { Book } = require('./models');

Book.create(
    [
        {
            title: 'Book 1',
            author: 'Author 1',
            pages: 199,
            genre: 'Business',
            price: 20,
            isbn: '243562456544624564'
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            pages: 199,
            genre: 'Business',
            price: 20,
            isbn: '08970247525223546'
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            pages: 199,
            genre: 'Business',
            price: 20,
            isbn: '8976846537546435'
        },
        {
            title: 'Book 4',
            author: 'Author 4',
            pages: 199,
            genre: 'Business',
            price: 20,
            isbn: '2456245645624566546'
        }
    ], (err, results) => {
        console.log(results);
    }
);