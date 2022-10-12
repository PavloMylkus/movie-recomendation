import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
 query Movies($page: Int){
  movies(page: $page) {
    page
    totalPages
    totalResults
     results {
      id
      title
      releaseDate(format: "dd.MM.yyyy")
      posterPath
	  voteCount
	  popularity
    }
  } 
}
`;