import React from "react";
import { USERS as users } from "../../assets/data";
import { Link } from "react-router-dom";

const HEADERS: string[] = ["Name", "Birth Date", "Occupation"];
const Home: React.FC = () => {
  return (
    <div>
      <h3>All Users</h3>
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
              <td>
                <Link to={`/${user.id}/personal`}>{user.name}</Link>
              </td>
              <td>{user.personal.birthday}</td>
              <td>{user.profession.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
