import { useState } from "react";
import { addDoc, collection } from '@firebase/firestore';
import { db, storage } from "../../../services/firebase.config";
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

function MemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAdd = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const imgURL = await uploadFile(); // Upload the file
      // Add form data along with image URL to Firestore
      const docRef = await addDoc(collection(db, "members"), {
        name,
        email,
        isActive,
        timestamp: serverTimestamp(),
        img: imgURL // Include image URL in document data
      });

      console.log("Document successfully added with ID: ", docRef.id);
      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setIsActive(false);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const uploadFile = async () => {
    try {
      let imgURL = ""; // Initialize empty string for image URL
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Wait for upload to complete
        await uploadTask;

        // Get download URL after successful upload
        imgURL = await getDownloadURL(uploadTask.snapshot.ref);
      }
      return imgURL; // Return the image URL
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw error; // Propagate the error
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsActive(checked);
    } else {
      if (name === "name") {
        setName(value);
      } else if (name === "email") {
        setEmail(value);
      }
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Active Member:
          <input
            type="checkbox"
            name="isActive"
            checked={isActive}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          File:
          <input type="file" onChange={handleFileChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MemberForm;
