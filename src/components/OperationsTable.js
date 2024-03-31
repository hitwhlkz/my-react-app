import OperationRow from "./OperationRow"

function OperationsTable({ data, filterText, completedOnly }) {
    const rows = [];
    //let lastCategory = null;
    data.forEach((operation) => {
        console.log(operation)
        // 添加条件判断，确保 operation 对象和相关属性已定义
      if (!operation || !operation.title) {
        return;
      }
      if (
        operation.title.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (completedOnly && operation.completed) {
        return;
      }
      rows.push(
        <OperationRow
          operation={operation}
          key={operation.id} />
      );
      //lastCategory = operation.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>tittle</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
export default OperationsTable;