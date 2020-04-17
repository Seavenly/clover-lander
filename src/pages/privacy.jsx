import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PrivacyPage = () => (
    <Layout>
        <SEO title="Privacy" />
        <p>
            We do not collect, store, or share any form of information or data presented here on this site. All values
            presented are not saved locally or remotely on another server. All values must be retrieved manually each
            time via the Clover Dashboard.
        </p>
    </Layout>
);

export default PrivacyPage;
