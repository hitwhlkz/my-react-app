import { useState } from "react";
import SearchBar from "./SearchBar";
import OperationsTable from "./OperationsTable"


function FilterableProductTable({ data }) {
    const [filterText, setFilterText] = useState('');
    const [completedOnly, setcompletedOnly] = useState(false);
  
    return (
      <div>
        <SearchBar
          filterText={filterText}
          completedOnly={completedOnly}
          onFilterTextChange={setFilterText}
          completedOnlyChange={setcompletedOnly} />
        <OperationsTable
          data={data}
          filterText={filterText}
          completedOnly={completedOnly} />
      </div>
    );
  }

  export default FilterableProductTable;