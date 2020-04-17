import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import './layout.css';

const main = css`
    padding: 5rem;
`;

const footer = css`
    text-align: center;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    color: #777;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Layout = ({ children }) => {
    return (
        <div>
            <main css={main}>{children}</main>
            <footer css={footer}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
