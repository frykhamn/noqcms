// import React, { useState, useEffect } from 'react';
// import useCrud from '../customHooks/useCrud';
// import { storage } from '../../../services/firebase.config';

// const NoqMembersForm = ({ member, onSaveDone, onCancel }) => {
//   const [name, setName] = useState(member ? member.name : '');
//   const [email, setEmail] = useState(member ? member.email : '');
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(member ? member.imageUrl : '');
//   const [isActive, setIsActive] = useState(member ? member.isActive : false);
//   const isUpdateMode = !!member;

//   // Initialize useCrud hook with a placeholder collection name
//   const { createItem: createMember, updateItem: updateMember, fetchData, data: members } = useCrud('placeholderCollection');

//   // Function to create collection if it doesn't exist
//   const createCollectionIfNotExists = async () => {
//     const collections = await firestore.listCollections();
//     const collectionNames = collections.map((col) => col.id);
//     if (!collectionNames.includes('noqMembers')) {
//       await firestore.collection('noqMembers').doc(); // Create a dummy document to create the collection
//     }
//   };

//   // Handle saving member data
//   const handleSave = async () => {
//     try {
//       await createCollectionIfNotExists(); // Check and create collection if it doesn't exist
//       // Your existing code for handling member data creation/update...
//       // This includes handling image upload, updating state, and calling CRUD functions
//     } catch (error) {
//       console.error('Create/Update error:', error);
//     }
//   };

//   useEffect(() => {
//     if (member && member.imagePath) {
//       setImageUrl(member.imagePath);
//     }
//   }, [member]);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h2 className="text-2xl font-bold mb-4">{isUpdateMode ? 'Update Member' : 'Add New Member'}</h2>

//         <label className="block mb-2">Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 mb-4"
//         />

//         <label className="block mb-2">Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border p-2 mb-4"
//         />

//         <label className="block mb-2">Image:</label>
//         {imageUrl && <img src={imageUrl} alt="Member" className="mb-2 w-32 h-32 object-cover rounded" />}
//         <input type="file" onChange={handleImageChange} className="mb-4" />

//         <label className="block mb-2">Active:</label>
//         <input
//           type="checkbox"
//           checked={isActive}
//           onChange={(e) => setIsActive(e.target.checked)}
//           className="h-5 w-5"
//         />

//         <div className="flex justify-end">
//           <button onClick={onCancel} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">
//             Cancel
//           </button>
//           <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
//             {isUpdateMode ? 'Update' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoqMembersForm;
