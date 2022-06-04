import {GridComponent, ColumnsDirective, ColumnDirective,Page,Inject,Filter} from '@syncfusion/ej2-react-grids'
import data from './dataSource.json';

import './App.css';

function App() {
  return (
    <div style={{ margin: '10%', marginTop: '5%'}}>
      <GridComponent 
        dataSource={data} 
        allowPaging={true}
        pageSettings={{ pageSize:5}}
        allowFiltering={true}
        >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText='Invoice ID' textAlign='center' width='100'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country'/>
          <ColumnDirective field='ShipName' headerText='Ship Name'/>
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Filter]}/>
      </GridComponent>
    </div>
  );
}

export default App;
