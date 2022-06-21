import Form from './components/Form';
import Flow from './components/Flow';
import PageTitles from './components/ui/PageTitles';
import './App.css';
import Breadcrums from './components/ui/Breadcrums';

export default function App() {

  

  return (

    <div className="app-cont">
      <Flow activeNumber= {5} totalNumber = {6} />
      <Breadcrums actualStep={4}/>
      <PageTitles title="login & enjoy with us" />
      <Form formTitle="LOGIN HERE" />
    </div>
  );
}
