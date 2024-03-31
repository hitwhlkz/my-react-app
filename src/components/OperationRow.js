function OperationRow({ operation }) {
    const title = operation.completed ? operation.title:
      <span style={{ color: 'red' }}>
        {operation.title}
      </span>;
  
    return (
      <tr>
        <td>{operation.userId}</td>
        <td>{operation.id}</td>
        <td>{title}</td>
      </tr>
    );
  }
export default OperationRow;