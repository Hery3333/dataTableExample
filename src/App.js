import {GridComponent} from '@syncfusion/ej2-react-grids'
import data from './dataSource.json';

import './App.css';

function App() {
  return (
    <div style={{ margin: '10%', marginTop: '5%'}}>
      <GridComponent dataSource={data}/>
    </div>
  );
}

export default App;
