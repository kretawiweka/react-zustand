import { Fragment, useEffect } from "react";
import useStore from "../libs/store";

const UserList = () => {
  const users = useStore((state) => state.users);
  const getUsers = useStore((state) => state.getUsers);
  const removeUser = useStore((state) => state.removeUser);

  useEffect(getUsers, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "14px" }}>{user.name} </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => removeUser(user.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default UserList;
