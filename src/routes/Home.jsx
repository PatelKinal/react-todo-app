import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
   // <div className="wrapper">
      <div className="todos">
        <Header >
          <h1>Todos List</h1>
          <p>What else needs to be done.!?</p>
        </Header>
        <TodosLogic />
      </div>
   // </div>
  );
};
export default Home;
