import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
function Track() {
  const { undergraduates, getUndergraduates } = useAppContext();
  useEffect(() => {
    getUndergraduates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="track-container">
        {undergraduates.map((undergraduate) => undergraduate.major)}
      </div>
    </div>
  );
}

export default Track;
