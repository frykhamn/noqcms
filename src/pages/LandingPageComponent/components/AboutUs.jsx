import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { db } from "../../../services/firebase.config";

import FooterComponent from "./FooterComponent";

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const teamMembersCollectionRef = collection(db, "aboutTeamPage");
        const dbQuery = query(teamMembersCollectionRef, orderBy("name"));
        const data = await getDocs(dbQuery);
        const teamMemberItems = data.docs.map((member) => ({
          id: member.id,
          ...member.data(),
        }));
        setTeamMembers(teamMemberItems);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12 px-3 sm:px-14 md:px-28 lg:px-60 xl:px-80">
          <h1 className="font-bold text-3xl font-heading">
            Vi som engagerat oss har den gemensamma nämnaren är viljan att göra
            skillnad
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-full bg-white shadow-lg overflow-hidden flex flex-col items-center"
            >
              <div>
                <img
                  className="object-center object-cover"
                  src={member.imageURL}
                  alt="photo"
                />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  {member.name}
                </p>
                <p className="text-base text-gray-400 font-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default AboutUs;
