import { useState, useEffect } from 'react';
import useCrud from '../customHooks/useCrud';


const NoqMembersForm = ({ member, onSaveDone, onCancel }) => {
    const [email, setEmail] = useState(member ? member.email : '');
    const [imagePath, setImagePath] = useState(member ? member.imagePath : '');
    const [isActive, setIsActive] = useState(member ? member.isActive : false);
    const isUpdateMode = !!member;
    const { createItem: createMember, updateItem: updateMember } =
    useCrud('noqMembersTest');

    const handleSave =  async () => {
        try {
            const memberData = {email, imagePath, isActive };
            
            if (isUpdateMode) {
                if (!member.id) {
                    console.error('Error: Member ID is missing.');
                    return;
                }
                await updateMember(member.id, memberData);
            } else {
                await createMember(memberData);
            }


            onSaveDone();
        } catch (error) {
            console.error('Create/Update error:', error);
        }
    };


    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            handleCancel(); // Cancel if Escape key is pressed
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
           document.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Run only on component mount

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {isUpdateMode ? 'Update Member' : 'Add New Member'}
        </h2>

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <label className="block mb-2">Image Path:</label>
        <input
          type="text"
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <label className="block mb-2">Active:</label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="h-5 w-5"
        />

        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isUpdateMode ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
    );
};

export  default NoqMembersForm;