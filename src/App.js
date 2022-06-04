import {GridComponent, ColumnsDirective, ColumnDirective,Toolbar,Page,Inject,Edit} from '@syncfusion/ej2-react-grids'
import data from './dataSource.json';
import {DataManager, UrlAdaptor } from '@syncfusion/ej2-data'
import './App.css';

function App() {

  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true }
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const baseURL = "http://localhost:8080"

  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    insertUrl: baseURL + '/orders/insert',
    removeUrl: baseURL + '/orders/delete',
    updateUrl: baseURL + '/orders/update',
    url: baseURL + '/orders'
  })

  return (
    <div style={{ margin: '10%', marginTop: '5%'}}>
      <h1>Editing</h1>
      <GridComponent 
        dataSource={data} 
        allowPaging={true}
        pageSettings={{ pageSize:5}}

        editSettings= {editOptions}
        toolbar={toolbarOptions}
        >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText='Invoice ID' isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name'/>
          <ColumnDirective field='Freight' textAlign='Right' format='C2' />
          <ColumnDirective field='OrderDate' headerText='orderDate' type='date' format='ymd'/>
        </ColumnsDirective>
        <Inject services={[Page,Edit, Toolbar]}/>
      </GridComponent>
    </div>
  );
}

export default App;
