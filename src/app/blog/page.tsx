import React from 'react'

import Blog from "@/Components/Global/Blog";
import Footer from '@/Components/Global/Footer'
import Navbar from '@/Components/Global/Navbar'

export default function page() {
    return (
        <>
            <Navbar />
            <Blog />
            <Footer />
        </>
    )
}