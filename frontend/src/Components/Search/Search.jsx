import React from 'react'
import "./Search.css"
function Search() {
  return (
<div id="wrap">
  <form action="" autoComplete="on">
  <input id="search" name="search" type="text" placeholder="What're we looking for ?"/><input id="search_submit" value="Rechercher" type="submit"/>
  </form>
</div>
  )
}

export default Search