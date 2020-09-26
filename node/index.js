import {create,readAll,readByAutor,readByTitulo, update, remove}  from './app.js';


const livro = {
    id : 1,
    titulo : "Era uma vez",
    autor : "Nick & Ray",
};

document.querySelector('#create').addEventListener('click', async () => {
    const livros = await create();

    console.log(livros);
});

document.querySelector('#buscar-all').addEventListener('click', async () => {
    const livros = await readAll();

    console.log(livros);
});

document.querySelector('#buscar-autor').addEventListener('click', async () => {
    const livros = await readByAutor();

    console.log(livros);
});

document.querySelector('#buscar-titulo').addEventListener('click', async () => {
    const livros = await readByTitulo();

    console.log(livros);
});

document.querySelector('#buscar-autor').addEventListener('click', async () => {
    const livros = await readByAutor();

    console.log(livros);
});

document.querySelector('#atualizar').addEventListener('click', async () => {
    const livros = await update();

    console.log(livros);
});

document.querySelector('#remover').addEventListener('click', async () => {
    const livros = await remove();

    console.log(livros);
});