import SideBarCard from "../SideBarCard/SideBarCard";

const SideBar = ({ goldens,handleRemove }) => {
    let total = goldens.map(sum => {return sum.price})
    const getCost = total.reduce((a,b) => a + b, 0)
  return (
    <div className="w-[310px]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {goldens.map((goldtable) => (
              <SideBarCard
                key={goldtable.id}
                goldtable={goldtable}
                handleRemove={handleRemove}
              ></SideBarCard>
            ))}
            <hr />
            
                <p className="text-xl mt-3">Total:</p>
            <td className="text-xl"> ${getCost}</td>
          
          </tbody>
        </table>
        <hr />
        
      </div>
    </div>
  );
};

export default SideBar;
