import { useState } from "react"

const DestinationForm = () => {
    const [category,setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState ('')
    const [comments, setComments] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const destination = {category, name, description, comments}
        
        const response = await fetch('/api/destination', {
            method: 'POST',
            body: JSON.stringify(destination),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        
        if(!response.ok){
            setErr(json.err)
        }
        if (response.ok){
            setCategory('')
            setName ('')
            setDescription('')
            setComments('')
            setErr(null)
            console.log('new destination added', json)
        }
    }

return(
    <form className="create" onSubmit={handleSubmit}>
        <h3> Add a New Destination! </h3>
        <label> Destination Category:</label>
        <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        />
        <label>Name of Destination:</label>
        <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <label>Destination Description:</label>
        <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />
        <label>Add Comments:</label>
        <input
        type="text"
        onChange={(e) => setComments(e.target.value)}
        value={comments}
        />

<button>ADD DESTINATION</button>
</form>

)
}

export default DestinationForm