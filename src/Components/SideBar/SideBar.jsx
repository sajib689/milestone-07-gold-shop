import SideBarCard from "../SideBarCard/SideBarCard";

const SideBar = ({ goldens,handleRemove }) => {
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
