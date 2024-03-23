import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

const ProfileGallery = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'members'), (snapshot) => {
            const fetchedMembers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setMembers(fetchedMembers);
        });

        return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
    }, []);

    return (
        <div className="member-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((member) => (
                <div key={member.id} className="relative member-card p-2 bg-white rounded-lg shadow-md">
                    <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3" />
                    <div className="relative">
                        <h3 className="text-base mb-2 font-semibold">{member.name}</h3>
                        <p className="text-sm mb-2 text-gray-600 mb-1 font-semibold">{member.role}</p>
                        <p className="text-sm mb-2 text-gray-600 mb-1 font-semibold">{member.email}</p>
                        {member.isActive ? (
                            <p className="text-sm text-green-600 font-semibold">Aktiv</p>
                        ) : (
                            <p className="text-sm text-red-600 font-semibold">Inaktiv</p>
                        )}
                        {/* Add any additional information you want to display */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileGallery;
