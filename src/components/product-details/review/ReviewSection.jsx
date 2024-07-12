import React, { useState } from 'react';

const ReviewSection = () => {
    
    const [comments, setComments] = useState([
        //placeholders
        { name: "John", date: "23 April", comment: "hello very nice" },
        { name: "Jane", date: "3 January", comment: "Placeholder comments" },
        { name: "Jenna", date: "1 May", comment: "bad review blla blla" }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        const date = new Date().toLocaleDateString(); 

        setComments([...comments, { name, date, comment }]);

        e.target.reset();
    };

  
    const reviewExample = (name, date, comment) => (
     //review template
            <div className="bg-white p-4 rounded-lg shadow-md flex my-1">
                <div className="flex-1">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-700">{comment}</p>
                </div>
                <div className="ml-auto">
                    <p className="text-gray-700 text-sm mb-2">Posted on {date}</p>
                </div>
            </div>
        );
        
   

    return (
        <div className="bg-gray-100 p-6">
            <h2 className="text-lg font-bold mb-4">Reviews</h2>
            <div className="comments-render">
               
                {comments.map((comment, index) => (
                    <div key={index}>
                        {reviewExample(comment.name, comment.date, comment.comment)}
                    </div>
                ))}
            </div>
            <form className="bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h3 className="text-lg font-bold mb-2">Add a comment</h3>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="3"
                        placeholder="Enter your comment"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-custom-purple hover:bg-on-hover-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ReviewSection;
