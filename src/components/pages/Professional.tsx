import { useRouteLoaderData } from "react-router-dom";
import { user as userType } from "../../assets/data";

const HEADERS: string[] = ["Experience"];
const Professional = () => {
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
          <td>{user.profession.experience}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Professional;
