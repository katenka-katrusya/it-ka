import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from '@/components/dialogs/Dialogs.jsx';
import Profile from '@/components/profile/Profile.jsx';
import NotFound from '@/pages/NotFound.jsx';
import Layout from '@/pages/Layout.jsx';
import News from '@/components/news/News.jsx';
import Music from '@/components/music/Music.jsx';
import Settings from '@/components/settings/Settings.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Profile />} path='/profile' />
          <Route element={<Dialogs />} path='/dialogs/*' />
          <Route element={<News />} path='/news' />
          <Route element={<Music />} path='/music' />
          <Route element={<Settings />} path='/settings' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
