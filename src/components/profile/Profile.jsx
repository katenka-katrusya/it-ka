import MyPosts from '@/components/profile/posts/MyPosts.jsx';
import ProfileInfo from '@/components/profile/profileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <section>
      <div className='container-lg py-5 px-5'>
        <ProfileInfo />
        <MyPosts />
      </div>
    </section>
  );
};

export default Profile;
