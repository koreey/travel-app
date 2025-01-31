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
             <div className="post-list-page"> 
            <h1 style={{ fontWeight: 'bold', color: '#F3F3F3', fontSize: '4rem' }}>
                Destination List
            </h1>
            <section className="post-item-container">{destinationPosts}</section>
        </div>
          );
        }