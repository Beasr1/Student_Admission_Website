import React from "react";
import Accordion from "./Accordion";
import "./Announcement.css";

const Annoucement = () => {
  const accordionData = [
    {
      title: "Gusto 2022!",
      content: `Gusto 2022 is On 20th Novemeber,2022. Singer Navjot Ahuja coming!`,
    },
    {
      title: "Vivacity 2023!",
      content: `Vivavcity 2023 is Expected to be held in Feb 2023!sam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos `,
    },
    {
      title: "LNM Celebrates 75th Independence Day!",
      content: `Sapiente expedita hic obcaecati, laborio
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  return (
    <div>
      <h3 id="announcement-header">Announcements!</h3>
      <div className="accordions">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Annoucement;
