import React, { FC, lazy } from 'react'
import { Route, Navigate, useLocation, Routes } from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'

const AccountSettingPage = lazy(() => import('pages/AccountSettingsPage'))

const PublicRoutes: FC = () => {
    const location = useLocation()
    const ismatch = checkPathMatch(location.pathname, paths)
    return (

        <Routes>
            <Route path={paths.accountSettings} element={<AccountSettingPage />} />
            <Route path="*" element={!ismatch ? <Navigate to={paths.home} /> : null} />
        </Routes>

    )
}

export default PublicRoutes