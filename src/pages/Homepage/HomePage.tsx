import React, { FC } from 'react'
// import { Helmet } from 'react-helmet'
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled'

const HomePage: FC = () => {
    return (
        <>

            <Helmet>
                <title>Main - My marketplace</title>
                <meta name="whatever" />
            </Helmet>
            <TestDiv />

        </>
    )
}

export default HomePage