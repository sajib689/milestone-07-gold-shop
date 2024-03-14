const SideBarCard = ({goldtable,handleRemove}) => {
  return (
    <>
      <tr className="bg-base-200">
        <td>{goldtable.title}</td>
        <td><button onClick={() => handleRemove(goldtable.id)} className="btn btn-error text-white">Delete</button></td>
      </tr>
    </>
  );
};

export default SideBarCard;
