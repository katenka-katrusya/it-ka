import DialogItem from '@/components/dialogs/DialogItem.jsx';
import Message from '@/components/dialogs/Message.jsx';
import data from '@/server/database/data.json';

const { names, messages } = data;

const Dialogs = () => {
  const namesElements = names.map(n => <DialogItem key={n.id} name={n.name} id={n.id}/>);
  const messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

  return (
    <section className='py-5 px-5'>
      <div className='container-lg'>
        <h2>Сообщения</h2>
        <div className='flex gap-10 md:gap-20'>
          <ul className='p-3'>
            {namesElements}
          </ul>
          <ul className='p-3'>
            {messagesElements}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
