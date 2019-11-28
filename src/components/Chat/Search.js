import React from 'react';

function Search() {
  return (
    <div className="searchChat">
        <i className="fas fa-search"></i>
        <input placeholder="Pesquisar" className="searchTitle" />
        <i className="fas fa-cog"></i>
        <i className="fas fa-edit"></i>
        <i className="fas fa-users-cog"></i>
      </div>
  )
}

export default Search;