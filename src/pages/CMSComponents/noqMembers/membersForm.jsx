import React, { useState, useEffect } from "react";
import CollapsibleContainer from "../cmsDashboardLayout/CollapsibleContainer";
import MemberDeleteButton from "./membersDeletion";
import { db, storage } from "../../../services/firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

function MemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState(null);
  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "members"));
      const fetchedMembers = [];
      querySnapshot.forEach((doc) => {
        fetchedMembers.push({ id: doc.id, ...doc.data() });
      });
      setMembers(fetchedMembers);
    } catch (error) {
      console.error("Error fetching members: ", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAdd = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setIsUploading(true); // Set uploading state to true
      let imgURL = "";
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask;
        imgURL = await getDownloadURL(uploadTask.snapshot.ref);
      }

      if (editingMember) {
        // If editing, update the existing member
        await updateMember(editingMember.id, {
          name,
          email,
          role,
          isActive,
          img: imgURL || editingMember.img,
          timestamp: serverTimestamp(),
        });
      } else {
        // If adding, add a new member
        const docRef = await addDoc(collection(db, "members"), {
          name,
          email,
          role,
          isActive,
          img: imgURL,
          timestamp: serverTimestamp(),
        });
        console.log("Document successfully added with ID: ", docRef.id);
      }

      fetchMembers(); // Refresh member list
      clearForm(); // Clear form fields
    } catch (error) {
      console.error("Error adding/editing document: ", error);
    } finally {
      setIsUploading(false); // Set uploading state to false after upload
    }
  };

  const updateMember = async (id, newData) => {
    try {
      await updateDoc(doc(db, "members", id), newData);
    } catch (error) {
      console.error("Error updating member: ", error);
      throw error;
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setRole("");
    setIsActive(false);
    setFile(null);
    setShowForm(false);
    setEditingMember(null);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setName(member.name);
    setEmail(member.email);
    setRole(member.role);
    setIsActive(member.isActive);
    setShowForm(true);
  };

  // const uploadFile = async () => {
  //   try {
  //     let imgURL = ""; // Initialize empty string for image URL
  //     if (file) {
  //       const name = new Date().getTime() + file.name;
  //       const storageRef = ref(storage, name);
  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       // Wait for upload to complete
  //       await uploadTask;

  //       // Get download URL after successful upload
  //       imgURL = await getDownloadURL(uploadTask.snapshot.ref);
  //     }
  //     return imgURL; // Return the image URL
  //   } catch (error) {
  //     console.error("Error uploading file: ", error);
  //     throw error; // Propagate the error
  //   }
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsActive(checked);
    } else {
      if (name === "name") {
        setName(value);
      } else if (name === "email") {
        setEmail(value);
      } else if (name === "role") {
        // Handle role input
        setRole(value);
      }
    }
  };

  const handleCreateDone = () => {
    setShowForm(false);
  };

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <CollapsibleContainer title="Main pageMembers">
      <div>
        <button
          onClick={handleCreateClick}
          disabled={isUploading} // Disable the button while uploading
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Member
        </button>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-2 py-1 rounded"
                onClick={handleCancel}
              >
                Close
              </button>
            </div>
            <form onSubmit={handleAdd} className="member-form">
              <div className="mb-4">
                <label className="block mb-2">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="w-full border p-2"
                    required
                    disabled={isUploading}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  Roll:
                  <input
                    type="text"
                    name="role"
                    value={role}
                    onChange={handleChange}
                    className="w-full border p-2"
                    required
                    disabled={isUploading}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full border p-2"
                    required
                    disabled={isUploading}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  Active Member :
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={isActive}
                    onChange={handleChange}
                    className="ml-1"
                    disabled={isUploading}
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">
                  File :
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="ml-1"
                    disabled={isUploading}
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {isUploading ? "Uploading..." : "Submit"}{" "}
                  {/* Show 'Uploading...' while uploading */}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isUploading}
                  className="bg-gray-500 text-white px-4 py-2 rounded ml-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Existing members */}
      <div className="member-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Mapping through members and rendering member cards */}
        {members.map((member) => (
          <div
            key={member.id}
            className="relative member-card p-2 bg-white rounded-lg shadow-md"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <div className="relative">
              <h3 className="text-base font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2 font-semibold">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                {member.email}
              </p>
              {member.isActive ? (
                <p className="text-sm text-green-600 font-semibold">Aktiv</p>
              ) : (
                <p className="text-sm text-red-600 font-semibold">Inaktiv</p>
              )}

              <button
                onClick={() => handleEdit(member)}
                className="absolute bottom-0 right-16 bg-blue-500 text-white px-2 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Update
              </button>

              <MemberDeleteButton
                memberId={member.id}
                onDelete={fetchMembers}
              />
            </div>
          </div>
        ))}
      </div>
    </CollapsibleContainer>
  );
}

export default MemberForm;
