import './Feed.css';
import React, { useEffect ,useState } from 'react';
import api from '../../services/api'

function Feed() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getPost() {
    const response = await api.get()
    setQuery(response.data)
    console.log('response.data', response.data)
    }
    getPost();
  }, [])
  return (
    <div>
      <div className="card-list">
        {query ? query.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>): ''};
      </div>
    </div>
  );
}

export default Feed;