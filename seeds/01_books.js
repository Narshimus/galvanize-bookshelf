let bookList = require('../books');

exports.seed = knex => knex('books').del()
    .then(() => knex('books').insert(bookList))
    .then(() => knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))"));
