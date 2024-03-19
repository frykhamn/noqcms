// import React, { useState, useEffect } from 'react';
// import useCrud from '../customHooks/useCrud';
// import NoqMembersForm from  './noqMembersForm'
// import CollapsibleContainer from '../cmsDashboardLayout/CollapsibleContainer';

// const NoqMembers = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isCreateMode, setCreateMode] = useState(false);
//   const { loading, error, data: members, fetchData } = useCrud('noqMembers');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleCreateDone = async () => {
//     setCreateMode(false);
//     await createCollectionIfNotExists();
//     fetchData(); // Re-fetch the members to reflect the new addition or updates
//   };

//   const handleCancel = () => {
//     setSelectedMember(null);
//     setCreateMode(false);
//   };

//   const handleCreateClick = () => {
//     setSelectedMember(null);
//     setCreateMode(true);
//   };

//   const handleUpdateClick = (member) => {
//     setSelectedMember(member);
//     setCreateMode(false);
//   };

//   const renderStatusIndicator = (isActive)  => {
//     return isActive ? (
//       <span className="bg-green-500 text-white px-2 py-1 rounded">Active</span>
//     ) : (
//       <span className="bg-red-500 text-white px-2 py-1 rounded">Inactive</span>
//     );
//   };

//   return (
//     <CollapsibleContainer title="Members">

//     <div>
//       <button onClick={handleCreateClick} className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
//         Add Member
//       </button>

//       {loading ? (
//         <p>Loading members...</p>
//         ) : error ? (
//           <p>Error: {error}</p>
//           ) : (
//             <div className="flex flex-wrap gap-8 max-w-lg">
//           {members.map((member, index) => (
//             <div key={member.id} className="your-item-styles">
//               {member.imagePath && (
//                 <img
//                 src={member.imagePath}
//                 alt={`Member ${index + 1}`}
//                 className="w-16 h-16 rounded-full object-cover"
//                 />
//                 )}
//               <p>{member.email}</p>
//               <p>{renderStatusIndicator(member.isActive)}</p>
//               {/* Display member details */}
//               <button onClick={() => handleUpdateClick(member)}
//               className='bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'> Edit
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {(selectedMember || isCreateMode) && (
//         <NoqMembersForm 
//         member={selectedMember} 
//         onSaveDone={handleCreateDone} 
//         onCancel={handleCancel} />
//         )}
//     </div>
//         </CollapsibleContainer>
//   );
// };

// export default NoqMembers;
