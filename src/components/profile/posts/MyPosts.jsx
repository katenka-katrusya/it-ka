import Post from '@/components/profile/posts/post/Post.jsx';
import data from '@/server/database/data.json';

const { posts } = data;

const MyPosts = () => {
  return (
    <section>
      <h2 className='mb-2'>MyPosts</h2>
      <div className='mb-5'>
        <textarea className='mr-3 h-28 w-full mb-2 rounded-2xl bg-gray-600/50'></textarea>
        <button className='py-2 px-5 border rounded text-xs'>Add post</button>
      </div>
      <div className='flex flex-col gap-3'>
        {posts.map(item =>
          <Post key={item.id} message={item.message} likesCount={item.likesCount} />
        )}
      </div>
    </section>
  );
};

export default MyPosts;
