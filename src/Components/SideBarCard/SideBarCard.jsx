const SideBarCard = ({goldtable}) => {
  return (
    <>
      <tr className="bg-base-200">
        <td>{goldtable.title}</td>
        <td><button className="btn btn-error text-white">Delete</button></td>
      </tr>
    </>
  );
};

export default SideBarCard;
