import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const group = css`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;

    & > * {
        flex: 1 1 40%;
    }
`;

const title = css`
    margin-right: 1rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    text-align: right;
`;

const code = css`
    font-weight: 600;
    padding: 0.5rem 2rem;
    border-radius: 0.2rem;
    border: 1px solid #ddd;
    background: #eee;
`;

const parseQuery = (string = '') =>
    string
        .slice(1)
        .split('&')
        .reduce((acc, pair) => {
            const [key, val] = pair.split('=');

            return {
                ...acc,
                [key]: val,
            };
        }, {});

const IndexPage = ({ location }) => {
    const hash = parseQuery(location.hash);
    const query = parseQuery(location.search);

    return (
        <Layout>
            <SEO title="Home" />
            {Object.entries({ ...hash, ...query }).map(([key, val]) => (
                <div css={group} key={key}>
                    <h3 css={title}>{key.replace(/_/g, ' ')}</h3>
                    <div>
                        <code css={code}>{val}</code>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default IndexPage;
