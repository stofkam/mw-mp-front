import React, { FC, lazy } from 'react'
import { Route, Navigate, useLocation, Routes } from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'


const HomePage = lazy(() => import('pages/Homepage'))
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'))

const PublicRoutes: FC = () => {
    const location = useLocation()
    const ismatch = checkPathMatch(location.pathname, paths)
    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.productDetails} element={<ProductDetailsPage />} />
            <Route path="*" element={!ismatch ? <Navigate to={paths.home} /> : null} />
        </Routes>
    )
}

export default PublicRoutes