import { useState, useEffect } from "react";

export const Reviews = ({ reviewId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/reviews`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setReviews(data || []);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reviewId]);

  const handleDelete = (id) => {

    setReviews(reviews.filter(review => review.id !== id));

    // fetch(`http://localhost:8000/reviews/${id}`, { method: 'DELETE' })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Failed to delete review');
    //     }
    //     console.log('Review deleted successfully');
    //   })
    //   .catch(error => {
    //     console.error('Error deleting review:', error);
    //   });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (reviews.length === 0) {
    return <div>No reviews found.</div>;
  }

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 w-3/6">
      {reviews.map((review) => (
        <li key={review.id} className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-5.jpg" alt="Reviewer image" />
          </span>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0 ml-3">2 hours ago</time>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                You commented on <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">Product no.4</a>
              </div>
            </div>
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {review.description}
            </div>
            <button
              className="mt-2 px-4 py-2 bg-custom-purple hover:bg-on-hover-purple text-white rounded"
              onClick={() => handleDelete(review.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};
