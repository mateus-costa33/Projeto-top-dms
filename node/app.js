const api = 'http://127.0.0.1:3000';

async function create(livro) {
  const res = await fetch(`${api}/livros`, {
    method: 'post',
    body: JSON.stringify(livro),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}
async function readAll() {
  const res = await fetch(`${api}/livros`);

  return await res.json();
}

async function readByTitulo(titulo) {
  const res = await fetch(`${api}/livros/${titulo}`);

  return await res.json();
}
async function readByAutor(autor) {
  const res = await fetch(`${api}/livros?autor=${autor}`);

  return await res.json();
}
async function update(id, livro) {
  const res = await fetch(`${api}/livros/${id}`,
  {
    method: 'put',
    body: JSON.stringify(livro),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }
  );

  return await res.json();
}
async function remove(id) {
  const res = await fetch(`${api}/livros/${id}`,
  {
    method:'delete',
  });

}

export { create,readAll,readByAutor,readByTitulo, update, remove };