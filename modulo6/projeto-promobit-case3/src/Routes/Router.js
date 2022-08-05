import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FeedPage from "../Pages/FeedPage/FeedPage"
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>}/>
                <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router