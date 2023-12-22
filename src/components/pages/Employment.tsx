import { useRouteLoaderData } from "react-router-dom";
import { user as userType } from "../../assets/data";
import { Link } from "react-router-dom";

const HEADERS: string[] = ["Current Company"];
const Employment = () => {
  const user = useRouteLoaderData("user") as userType;

  return (
    <div>
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
            <td>{user.employment.currentCompany}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/${user.id}/all`} className="button">
        Current company of all employees
      </Link>
    </div>
  );
};

export default Employment;
