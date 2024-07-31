import data from '@/server/database/data.json';
import { renderEntireTree } from '@/render.jsx';

export const addNewPost = () => {
  const newPost = {
    id: Date.now(),
    message: data.newPostText,
    likesCount: 0
  }

  data.posts.push(newPost);
  renderEntireTree();

  return newPost;
}

export const updateNewPostText = (newText) => {
  data.newPostText = newText;

  renderEntireTree();
}
