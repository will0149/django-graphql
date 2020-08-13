import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
const QUERY_BLOGS = gql`
  query {
  blogs{
    id
    title
    description
    videoUrl
    serviceImage
    created
  }
}
`;
export default function BlogsInfo() {
  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  const { data, loading } = useQuery(
    QUERY_BLOGS, {
      pollInterval: 500 // refetch the result every 0.5 second
    }
  );
  
  // should handle loading status
  if (loading) return <p>Loading...</p>;
   
  return data.blogs.map(({ id, title, description, videoUrl, serviceImage, created }) => (
    <div key={id}>
        <h2>{title}</h2>
        <img src={serviceImage}/>
      <p>
        { description }
      </p>

      <iframe width="560" height="315" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  ));
}