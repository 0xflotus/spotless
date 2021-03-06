import React from 'react'
import SearchResultItemContainer from '../containers/SearchResultItemContainer'
import { loadMore } from '../actions/search';

const SearchResultViewer = ({ result, resultType, onLoadMore }) => {
  const items = result ? result.items.map(itemId => <SearchResultItemContainer id={itemId} type={resultType} key={itemId}/>) : [];

  return (
    <div className="search-result">
      <div className="search-result-viewer">
        {items}
      </div>
      <div className="search-load-more-button">
        <button onClick={() => onLoadMore(resultType)}>load more</button>
      </div>
    </div>
  )
}

export default SearchResultViewer