import * as destinationService from "../../services/destinationService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
export default function DestinationDetailsPage(){
    const {id} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function fetchPost() {
          const destination = await destinationService.details(id);
          setPost(destination);
          console.log(destination);
        }
        fetchPost();
      }, []);

return (
    <>
    <h1>Details Page</h1>
    </>
)

}