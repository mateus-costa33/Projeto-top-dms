const api = 'http://127.0.0.1:3000';

async function create(livro) {
  const res = await fetch(`${api}/livro`, {
    method: 'post',
    body: JSON.stringify(livro),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}