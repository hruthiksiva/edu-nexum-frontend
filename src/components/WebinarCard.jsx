const WebinarCard = ({ webinar }) => (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="text-lg font-bold">{webinar.title}</h3>
      <p className="text-gray-600">{webinar.description}</p>
      <p>Date: {new Date(webinar.date).toLocaleDateString()}</p>
      <p>{webinar.isPaid ? `Price: $${webinar.price}` : "Free"}</p>
      <a
        href={webinar.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Register
      </a>
    </div>
  );
  
  export default WebinarCard;