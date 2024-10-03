import React from "react";
import { useParams } from "react-router-dom";
import LeadsDetailsNav from "../Components/LeadsDetailsNav";
import LeadsDetailsChane from "../Components/LeadsDetailsChane";
import LeadsDetailsMain from "../Components/LeadsDetailsMain";
const LeadsDetails = () => {
  const { id } = useParams();
  return (
    <section className="pt-[40px] mx-auto container">
      <LeadsDetailsNav />
      <LeadsDetailsChane />
      <LeadsDetailsMain />
    </section>
  );
};

export default LeadsDetails;
