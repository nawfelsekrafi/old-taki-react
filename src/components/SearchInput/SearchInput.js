import './index.css';

const SearchInput = () => {
  return (
    <div className="search-input">
       <input dir="rtl" type="text" placeholder='ابحث عن أي شيء...' />
      <img src="assets/icons/search-normal.svg" alt="search icon"  />
    </div>
  )
}

export default SearchInput