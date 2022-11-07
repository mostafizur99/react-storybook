import './App.css';
import ButtonDefault from '../src/ui/Atoms/Buttons/ButtonDefault';

function App() {
  return (
    <div className='my-5'>
      <div className='container mx-auto py-10 bg-slate-100'>
        <div className='text-center'>
          <h4 className='font-bold'>Title Here</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati animi debitis consectetur veniam tempore aut quidem ea blanditiis, nesciunt autem nam laborum enim accusantium ratione ex eius hic, similique nihil quae corrupti fugit repellendus minima magni error. Corrupti deserunt, laudantium sed deleniti suscipit, necessitatibus fugiat maxime expedita quia nemo doloribus.</p>
        </div>
        <div className='flex justify-center mt-4'>
          <ButtonDefault variant={'success'} size={'large'}>Button</ButtonDefault>
        </div>
      </div>

    </div>
  );
}

export default App;
