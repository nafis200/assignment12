import { useState } from "react";




const Commentdetails = () => {
    const [Say,setSay] = useState('')
    const handleSubmit = e=>{
        e.preventDefault()
        const form = e.target
        const value = form.comment.value 
        setSay(value)
        e.target.reset()
    }
    return (
        <div>
            <h2 className="text-2xl">Commnet survey</h2>
            
            <form onSubmit={handleSubmit} action="">
                <input type="text" className="textarea textarea-primary mt-5 p-8"placeholder="comment" name="comment" id="" />
                <br />
                <input className="mt-2 btn btn-primary" type="submit" value="Submit" />
            </form>
            <h2 className="text">Your comment is  <span className="text-blue-400">{Say}</span> </h2>

        </div>
    );
};

export default Commentdetails;