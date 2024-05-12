import { FaPhoneAlt, FaUser } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

import { useState } from "react";
import DeleteContactModal from "../Modal/DeleteContactModal";

const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)).then(() => {
      toast.success("Contact deleted");
    });
    setIsModalOpen(false);
  };

  return (
    <li>
      <div>
        <div className={style.wrapIcon}>
          <FaUser />
          <Toaster position="top-right" reverseOrder={false} />
          <p>{name}</p>
        </div>
        <div className={style.wrapIcon}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" name="delete" onClick={() => setIsModalOpen(true)}>
        Delete
      </button>
      <DeleteContactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </li>
  );
};

export default Contact;
