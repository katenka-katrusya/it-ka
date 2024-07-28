import DialogItem from '@/components/dialogs/DialogItem.jsx';
import Message from '@/components/dialogs/Message.jsx';
import data from '@/server/database/data.json';

const { names, messages } = data;

const Dialogs = () => {
  return (
    <section className='py-5 px-5'>
      <div className='container-lg'>
        <h2>Сообщения</h2>
        <div className='flex gap-10 md:gap-20'>
          <ul className='p-3'>
            {names.map(n =>
              <DialogItem key={n.id} name={n.name} id={n.id}/>
            )}
          </ul>
          <ul className='p-3'>
            {messages.map(m =>
              <Message key={m.id} message={m.message}/>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
