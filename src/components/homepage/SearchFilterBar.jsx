function SearchFilterBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search plants..."
      />
      <div>
        <button>Light</button>
        <button>Size</button>
        <button>Toxicity</button>
      </div>
    </div>
  );
}

export default SearchFilterBar;