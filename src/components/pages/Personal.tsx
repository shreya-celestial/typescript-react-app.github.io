import { useRouteLoaderData } from "react-router-dom";
import { user as userType } from "../../assets/data";

const HEADERS: string[] = ["Name", "Address", "Mobile No"];
const Personal = () => {
  const user = useRouteLoaderData("user") as userType;

  return (
    <table>
      <thead>
        <tr>
          {HEADERS.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.personal.address}</td>
          <td>{user.personal.mobile}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Personal;
