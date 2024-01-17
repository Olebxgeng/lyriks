import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTearm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTearm}`);
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only"> Search songs</label>
      <div className="flex flex-row justify-start items-center">
        <FaSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="search"
          type="search"
          value={searchTearm}
          onChange={(e) => { setSearchTerm(e.target.value); }}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
