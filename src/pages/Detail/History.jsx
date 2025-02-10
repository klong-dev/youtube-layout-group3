import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("watchedVideos")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div>
      {history.map((item) => (
        <img
          key={item.id}
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          className="w-full h-full object-cover"
        />
      ))}
    </div>
  );
}

export default History;
