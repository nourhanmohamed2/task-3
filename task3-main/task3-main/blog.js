const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

document.getElementById('post1.title').innerText = posts[0].title;
document.getElementById('post1.date').innerText = posts[0].date;
document.getElementById('post1.author').innerText = posts[0].author;
document.getElementById('post1.contents').innerText = posts[0].contents;
document.getElementById('post2.title').innerText = posts[1].title;
document.getElementById('post2.date').innerText = posts[1].date;
document.getElementById('post2.author').innerText = posts[1].author;
document.getElementById('post2.contents').innerText = posts[1].contents;
document.getElementById('post3.title').innerText = posts[2].title;
document.getElementById('post3.date').innerText = posts[2].date;
document.getElementById('post3.author').innerText = posts[2].author;
document.getElementById('post3.contents').innerText = posts[2].contents;
