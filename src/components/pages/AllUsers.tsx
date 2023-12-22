import { USERS as users } from "../../assets/data";

const HEADERS: string[] = ["Name", "Company Name"];
const AllUsers = () => {
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
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.employment.currentCompany}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllUsers;
