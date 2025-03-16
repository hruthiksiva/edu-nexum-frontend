import { useState, useEffect } from "react";
import WebinarCard from "../components/WebinarCard";
import { getWebinars } from "../services/api";

const Webinars = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    getWebinars().then((res) => setWebinars(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Webinars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar._id} webinar={webinar} />
        ))}
      </div>
    </div>
  );
};

export default Webinars;