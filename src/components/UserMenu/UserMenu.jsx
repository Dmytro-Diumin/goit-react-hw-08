import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      toast.success("Logout successful");
    });
  };

  return (
    <div className={styles.wrap}>
      <p>Welcome,{name} </p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
