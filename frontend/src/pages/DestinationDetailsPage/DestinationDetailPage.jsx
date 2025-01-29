import * as destinationService from "../../services/destinationService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import destination from "../../../../backend/models/destination";

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
    <div>
        <h2>Category: {destination.selected.category} </h2>
        <h2> Name: {destination.selected.name}</h2>
        <h2> Description: {destination.selected.description}</h2>
        <h2> Comments: {description.selected.comments}</h2>

        <div>
            <button onClick={() => destination.handleFormView(destination.selected)}>
                EDIT Destination
            </button>
        </div>
    </div>
    </>
)

}