import { useRouteLoaderData } from "react-router-dom";
import { user as userType } from "../../assets/data";

const HEADERS: string[] = [
  "College Name",
  "Degree",
  "Pass Out year",
  "Address",
];
const Academic = () => {
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
          <td>{user.academic.collegeName}</td>
          <td>{user.academic.degree}</td>
          <td>{user.academic.passoutyear}</td>
          <td>{user.academic.addressCollege}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Academic;
