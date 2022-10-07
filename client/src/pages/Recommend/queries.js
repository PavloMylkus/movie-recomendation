import { gql } from "@apollo/client";

export const MOVIES_BY_IDS_QUERY = gql`
query MoviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
        id
        title
        posterPath
        releaseDate(format: "dd.MM.yyyy")
    }
}
`