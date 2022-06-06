import React from "react";
import bootstrap from "bootstrap";
import { css, jsx } from "@emotion/css";

import { useNavigate, useParams } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import { LOAD_ANIME } from "../GraphQL/query";

function AnimeDetail() {
    const navigate = useNavigate();

    const { animeid } = useParams();
    const [anime, setAnime] = React.useState(null);

    const { loading, error, data } = useQuery(LOAD_ANIME);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const animedata = data.Media;
    console.log("Console: " + data);

    return (
        <div>
            <div
                className={css`
                background-color:#5c728a
                                `}
            >
                <div
                    className={css`
                    justify-content:center
                    text-align:center;
                    `}
                >
                    <h1>
                        Description
                    </h1>
                </div>
                <div className={css`
                    text-align:center;
                    `}>
                    <img src={animedata.coverImage.large} />
                    <div
                        className={css`
                            text-align: center;
                            font-size: 24px;
                            border-radius: 4px;
                            `}
                    >
                        <p>{animedata.title.english}</p>
                        <p>{animedata.title.native}</p>
                        <p>{animedata.title.romaji}</p>
                    </div>
                    <div
                        className={css`
                        justify-content:center
                        text-align:center;
                        `}
                    >
                        <p>Details: </p>
                        <p>{animedata.genres}</p>
                        <p>{animedata.description}</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AnimeDetail;