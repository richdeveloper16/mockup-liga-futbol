import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/** Import Auth */
import LoginPage from '../modules/auth/page/Login';

/** Import Dashboard */
import DashboardPage from '../modules/dashboard/page/Dashboard';

/** Import Delegate */
import TeamInformationPage from '../modules/delegate/page/team_information';
import TeamStatistics from '../modules/delegate/page/TeamStatistics';
import RegisterPlayerPage from '../modules/delegate/page/RegisterPlayerPage';
import MatchCalendarPage from '../modules/delegate/page/MatchCalendarPage';
import MatchDetailPage from '../modules/delegate/page/MatchDetailPage';
import StatsPage from '../modules/delegate/page/StatsPage';


/** Import Player */
import DetailPage from '../modules/player/page/DetailPage';
import DigitalIDCard from '../modules/player/page/DigitalIDCard';
import PlayerStatsPage from '../modules/player/page/PlayerStatsPage';
import PaymentHistoryPage from '../modules/player/page/PaymentHistoryPage';
import NextMatchesPage from '../modules/player/page/NextMatchesPage';
import LeagueStandingsPage from '../modules/player/page/LeagueStandingsPage';
import TeamInfoPage from '../modules/player/page/TeamInfoPage';

/** Import Referee */
import CurrentMatchdayPage from '../modules/referee/page/CurrentMatchdayPage';
import MatchSheet from '../modules/referee/page/MatchSheet';
import IncidentReport from '../modules/referee/page/IncidentReport';
import QRScanner from '../modules/referee/page/QRScanner';

/** Import Public */
import PublicExplorePage from '../modules/public/page/PublicExplorePage';
import TeamPublicProfile from '../modules/public/page/TeamPublicProfile';
import AnnouncementsPage from '../modules/public/page/AnnouncementsPage';
import PhotoGallery from '../modules/public/page/PhotoGallery';
import LandingPage from '../modules/public/page/LandingPage';


/** Import Admin */
import CategoriesPage from '../modules/admin/page/CategoriesPage';
import FormatsPage from '../modules/admin/page/FormatsPage';
import SeasonsPage from '../modules/admin/page/SeasonsPage';

import NewFormatForm from '../modules/admin/page/NewFormatForm';
import NewCategoryForm from '../modules/admin/page/NewCategoryForm';
import NewSeasonForm from '../modules/admin/page/NewSeasonForm';

/** Import NotFoundPage */
import NotFoundPage from '../components/shared/404/NotFoundPage';

const AppRoutes: React.FC = () => {
    return (
        <Routes>

            {/*  NotFoundPage */}
            <Route path="/notfoundgage/not-found-page" element={<NotFoundPage />} />



            {/* Redirección inicial */}
            <Route path="/" element={<Navigate to="/public/landingpage" />} />

            {/* Acceso  */}
            <Route path="/login" element={<LoginPage />} />


            {/*  Player */}
            <Route path="/player/deatail-player" element={<DetailPage />} />
            <Route path="/player/digital-carid" element={<DigitalIDCard />} />
            <Route path="/player/player-stats" element={<PlayerStatsPage />} />
            <Route path="/player/payment-history" element={<PaymentHistoryPage />} />
            <Route path="/player/next-match" element={<NextMatchesPage />} />
            <Route path="/player/league-standings" element={<LeagueStandingsPage />} />
            <Route path="/player/team-info" element={<TeamInfoPage />} />

            {/*  Referee */}
            <Route path="/referee/current-match" element={<CurrentMatchdayPage />} />
            <Route path="/referee/match-sheet" element={<MatchSheet />} />
            <Route path="/referee/incident-report" element={<IncidentReport />} />
            <Route path="/referee/qr-scanner" element={<QRScanner />} />


            {/*  Dashboard */}
            <Route path="/dashboard" element={<DashboardPage />} />

            {/*  Delegate */}
            <Route path="/delegate/team-information" element={<TeamInformationPage />} />
            <Route path="/delegate/player-list" element={<TeamStatistics />} />
            <Route path="/delegate/register-player" element={<RegisterPlayerPage />} />
            <Route path="/delegate/march-calendar" element={<MatchCalendarPage />} />
            <Route path="/delegate/detail-match" element={<MatchDetailPage />} />
            <Route path="/delegate/stats-team" element={<StatsPage />} />

            {/*  Public */}
            <Route path="/public/explore-league" element={<PublicExplorePage />} />
            <Route path="/public/public-team-profile" element={<TeamPublicProfile />} />
            <Route path="/public/announcements" element={<AnnouncementsPage />} />
            <Route path="/public/photogallery" element={<PhotoGallery />} />
            <Route path="/public/landingpage" element={<LandingPage />} />

             {/*  Admin */}
            <Route path="/admin/admin-categories" element={<CategoriesPage />} />
             <Route path="/admin/admin-formats" element={<FormatsPage />} />
              <Route path="/admin/admin-seasons" element={<SeasonsPage />} />
                <Route path="/admin/register-format" element={<NewFormatForm />} />
             <Route path="/admin/register-category" element={<NewCategoryForm />} />
              <Route path="/admin/register-season" element={<NewSeasonForm />} />

        </Routes>
    );
};

export default AppRoutes;