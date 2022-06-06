import { gql } from "@apollo/client";


export const LOAD_ANIMELIST = gql`
query ($ids: [Int]) {
  Page(page: 1, perPage: 10) {
    media(id_in: $ids, type: ANIME) {
      id
      idMal
      startDate {
        year
        month
        day
      }
      season
      seasonYear
      title {
        native
        romaji
        english
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
    }
  }
}
`;

export const LOAD_ANIME = gql`
query ($ids: [Int]) {
  # Page(page: 1, perPage: 10) {
    Media(id_in: $ids, type: ANIME) {
      id
      idMal
      startDate {
        year
        month
        day
      }
      season
      seasonYear
      title {
        native
        romaji
        english
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      genres
      description
    }
  # }
}
`;
