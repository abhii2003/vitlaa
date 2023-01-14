import React from "react";
import DownloadHead from './downloadHead';
import DownloadPng from './downloadpng';
import DownloadContent from './downloadContent';


export default function DownloadPage() {
    return (
        <>
            <DownloadHead />
            <DownloadContent />
            <DownloadPng />
        </>
    )
}