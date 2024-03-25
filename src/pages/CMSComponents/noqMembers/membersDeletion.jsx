import React from "react";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../../services/firebase.config";

function MemberDeleteButton({ memberId, onDelete }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "members", memberId));
      onDelete(); // Refresh member list after deletion
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="absolute bottom-0 right-0 text-red-500 hover:text-red-700 font-semibold"
    >
      Delete
    </button>
  );
}

export default MemberDeleteButton;
