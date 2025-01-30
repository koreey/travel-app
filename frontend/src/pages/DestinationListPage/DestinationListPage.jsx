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
        
          const destinationPost = posts.map((p) =>{
            return(
                <Link to={`/destination/details/${p._id}`} key={p._id}> 
                 <DestinationPost  post={p} />;
                 </Link>
            )})
        
          return (
            <>
              <h1>Destination List</h1>
              <section className="destination-post-container">{destinationPost}</section>
            </>
          );
        }