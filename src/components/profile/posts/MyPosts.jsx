import React from 'react';
import Post from '@/components/profile/posts/post/Post.jsx';
import data from '@/server/database/data.json';
import { addNewPost, updateNewPostText } from '@/redux/state.js';

const { posts } = data;

const MyPosts = () => {
  const postsElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

  const postElement = React.createRef();
  const addPost = () => {
    // const text = postElement.current?.value;
    addNewPost();
    // postElement.current.value = '';
    updateNewPostText('');
  };

  const onPostChange = () => {
    const text = postElement.current?.value;
    updateNewPostText(text);
  }

  return (
    <section>
      <h2 className='mb-2'>MyPosts</h2>
      <div className='mb-5'>
        <textarea onChange={onPostChange} value={data.newPostText} ref={postElement} placeholder='Enter your post'
                  className='mr-3 h-28 w-full mb-2 rounded-2xl bg-gray-600/50 outline-none py-2 px-3' />
        <button onClick={addPost} className='py-2 px-5 border rounded text-xs'>Add post</button>
      </div>
      <div className='flex flex-col gap-3'>
        {postsElements}
      </div>
    </section>
  );
};

export default MyPosts;
