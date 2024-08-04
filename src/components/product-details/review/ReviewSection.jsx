import React, { useState, useEffect } from 'react';
import { useGetReviewByProductIdQuery } from '../../../redux/api/reviewsApi';

const ReviewSection = ({id}) => {
    const [comments, setComments] = useState([]);

    const { data, isLoading: loading } = useGetReviewByProductIdQuery(id)

    useEffect(() => {
        console.log("reviews")
        console.log(data)
        setComments(data)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        const date = new Date().toLocaleDateString();

        setComments([...comments, { name, date, comment }]);

        e.target.reset();
    };

    const reviewExample = (name, date, comment) => (
        <div key={`${name}-${date}`} className="bg-white p-4 rounded-lg shadow-md flex my-1 dark:bg-background-blue dark:text-cream dark:shadow-light">
            <div className="flex-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-gray-700 dark:text-cream">{comment}</p>
            </div>
            <div className="ml-auto">
                <p className="text-gray-700 text-sm mb-2 dark:text-cream">Posted on {date}</p>
            </div>
        </div>
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 p-6 dark:bg-background-blue dark:border-cream">
            <h2 className="text-xl font-semibold mb-4 dark:text-cream">Reviews</h2>
            <div className="comments-render">
                {comments?.map((comment) => (
                    <div key={comment.id}>
                        {reviewExample(comment.userOverview.firstName + " " + comment.userOverview.lastName, "12/10/2023", comment.comment)}
                    </div>
                ))}
            </div>
            <form className="bg-white p-4 rounded-lg shadow-md dark:bg-background-blue" onSubmit={handleSubmit}>
                <h3 className="text-lg font-bold mb-2 dark:text-cream">Add a comment</h3>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 dark:text-cream">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-background-blue"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 font-bold mb-2 dark:text-cream">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="3"
                        placeholder="Enter your comment"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-background-blue"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-custom-purple hover:bg-on-hover-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:text-cream"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ReviewSection;
