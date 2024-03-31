import DATA from '../src/data/data';
import FilterableProductTable from './components/FilterableProductTable';


export default function App() {
  return <FilterableProductTable data={DATA} />;
}