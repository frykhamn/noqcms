import { useState, useEffect  } from 'react';
import useCrud from '../customHooks/useCrud';
import CollapsibleContainer from '../cmsDashboardLayout/CollapsibleContainer';
import NoqMembersForm from './noqMembersForm';

const  NoqMembers = () => {
    const [selectedMember, setSelectedMember]  = useState(null);
    const [isCreateMode, setCreateMode] = useState(false);
    const{
        loading,
        error,
        data: members,
        fetchData
    } = useCrud('noqMembersTest');

    useEffect(() => {
        fetchData();
    }, []);


      const handleCreateDone = () => {
        setCreateMode(false);
        fetchData(); // Re-fetch the members to reflect the new addition or updates
    };

    const handleCancel = () => {
        setSelectedMember(null);
        setCreateMode(false);
    };

    const handleCreateClick = () => {
        setSelectedMember(null);
        setCreateMode(true);
    };

    const handleUpdateClick = (member) => {
        setSelectedMember(member);
        setCreateMode(false);
    };


    return (
        <CollapsibleContainer title="Members">
          <button onClick={handleCreateClick} className="your-button-styles">
            Add Member
          </button>
    
          {loading ? (
            <p>Loading members...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="flex flex-wrap gap-8 max-w-lg">
              {members.map((member, index) => (
                <div key={member.id} className="your-item-styles">
                  <img src={member.imagePath} alt={`Member ${index + 1}`} className="w-16 h-16 rounded-full object-cover" />
                  <h3>{member.name}</h3>
                  <p>{member.email}</p>
                  <p>{member.isActive ? 'Active' : 'Inactive'}</p>
                  {/* Display member details */}
                  <button onClick={() => handleUpdateClick(member)}>Edit</button>
                </div>
              ))}
            </div>
          )}
    
          {(selectedMember || isCreateMode) && (
            <NoqMembersForm
              member={selectedMember}
              onSaveDone={handleCreateDone}
              onCancel={handleCancel}
            />
          )}
        </CollapsibleContainer>
      );
    };

export default NoqMembers;