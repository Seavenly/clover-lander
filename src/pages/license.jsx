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

const LicensePage = () => (
    <Layout>
        <SEO title="License" />
        <p>The MIT License (MIT)</p>
        <p>Copyright (c) 2015 gatsbyjs</p>
        <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
            documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
            following conditions:
        </p>
        <p>
            The above copyright notice and this permission notice shall be included in all copies or substantial
            portions of the Software.
        </p>
        <p>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
            NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
            IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
    </Layout>
);

export default LicensePage;
