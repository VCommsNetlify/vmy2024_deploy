'use client'
import Channels from "@/components/section/Channels";
import EventsUpdates from "@/components/section/EventsUpdates";
import FAQ from "@/components/section/FAQ";
import Footer from "@/components/section/Footer";
import Gallery from "@/components/section/Gallery";
import Hero from "@/components/section/Hero";
import Merch from "@/components/section/Merch";
import Playlist from "@/components/section/Playlist";
import Quiz from "@/components/section/Quiz";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <div className="floater-icon">
                <a href="#warrior-type">
                    <img src="assets/Floater-Blue.png" alt="floater" />
                </a>
            </div>
            <Hero />
            <Merch />
            <section id="events-socials">
                <EventsUpdates />
                <Playlist />
                <Channels />
                <Gallery />
                <Suspense>
                    <Quiz />
                </Suspense>
            </section>
            <FAQ />
            <Footer />
        </>
    );
}
