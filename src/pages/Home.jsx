import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query) {
      setError("Please enter a book title.");
      setBooks([]);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );

      if (response.data.docs.length === 0) {
        setError("No books found.");
        setBooks([]);
      } else {
        setBooks(response.data.docs.slice(0, 20)); // show top 20 results
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-3">🔄 Loading...</p>}
      {error && <p className="text-danger text-center mt-3">{error}</p>}

      <BookList books={books} />
    </div>
  );
}

export default Home;

