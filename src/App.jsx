import Form from './components/Form';
import Flow from './components/Flow';
import PageTitles from './components/ui/PageTitles';
import './App.css';

export default function App() {

  

  return (

    <div className="app-cont">
      <Flow activeNumber= {3} totalNumber = {4} />
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" />
    </div>
  );
}
