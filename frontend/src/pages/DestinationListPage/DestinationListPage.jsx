import { useState, useEffect } from 'react';
import * as destinationService from '../../services/destinationService';
import '../PostListPage/PostListPage.css';
import DestinationPost from '../../components/DestinationPost/DestinationPost';
import {Link} from 'react-router-dom';


export default function DestinationListPage() {
    const [posts, setPosts] = useState([]);

        useEffect(() => {
            async function fetchPosts() {
              
              const destination = await destinationService.index();
              setPosts(destination);
            }
            fetchPosts();
          }, []);
        
          const destinationPosts = posts.map((p) => <DestinationPost key={p._id}  post={p} />);
           
        
          return (
            <>
              <h1>Destination List</h1>
              <section className="destination-post-container">{destinationPosts}</section>
            </>
          );
        }