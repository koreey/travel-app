import { useState, useEffect } from 'react';
import * as destinationService from '../../services/destinationService';
import '../PostListPage/PostListPage.css';
import DestinationPost from '../../components/DestinationPost/DestinationPost';

export default function DestinationListPage() {
    const [posts, setPosts] = useState([
        {
            category: '',
            createdAt: '2025-01-22T08:35:22',
            user: {
              name: 'Kate',
              email: 'kate@email.com',
              _id: 'a45fb15',
            },
          },
          {
            content: 'Hello there from Justin',
            createdAt: '2025-01-21T06:35:22',
            user: {
              name: 'Justin',
              email: 'justin@email.com',
              _id: 'a45fb16',
            },
          },
        ]);
        useEffect(() => {
            async function fetchPosts() {
              const destination = await destinationService.index();
              setPosts(destination);
            }
            fetchPosts();
          }, []);
        
          const destinationPost = posts.map((p) => <DestinationPost key={p._id} post={p} />);
        
          return (
            <>
              <h1>Destination List</h1>
              <section className="destination-post-container">{destinationPost}</section>
            </>
          );
        }