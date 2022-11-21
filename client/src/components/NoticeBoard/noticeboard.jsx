import Accordion from "../announcement/Accordion";
function Noticeboard({ noticeData }) {
  return (
    <div>
      <div className="noticeboard">
        {noticeData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Noticeboard;
