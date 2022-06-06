import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import { css, jsx } from "@emotion/css";
import bootstrap from "bootstrap";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import { LOAD_ANIMELIST } from "../GraphQL/query";

function AnimeList() {
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(LOAD_ANIMELIST);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const listdata = data.Page.media;
    const color = 'white';
    const listAnime = listdata.map(media =>
        <div>
            <li className={css`
            list-style: none;
            text-align:center;
            `}>
                <a onClick={() => { navigate("/AnimeDetail/" + media.id) }} >
                    <div className={css`
                    text-align:center;
                    `}>
                        <img src={media.coverImage.large} />
                    </div>
                    <div
                        className={css`
                            text-align: center;
                            font-size: 24px;
                            border-radius: 4px;
                            &:hover {
                                color: ${color};
                            }
                            `}
                    >
                        <p>{media.title.english}</p>
                        <p>{media.title.native}</p>
                        <p>{media.title.romaji}</p>
                    </div>
                </a>
            </li>
        </div >
    );

    return (
        <div className={css`
            background-color: #5c728a
        }
        `}>
            <div className={css`
                            text-align: center;
                            font-size: 24px;
                            border-radius: 4px;
                            `}>
                <h1>Anime List</h1>
            </div>
            <div>
                {listAnime}
            </div>
        </div>
    )
}

export default AnimeList;