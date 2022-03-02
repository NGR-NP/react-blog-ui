import React from 'react'
import Posts from '../../components/posts/Posts'
import Sidebar from "../../components/sidebar/Sidebar";
import "./apost.css";

const Aposts = () => {
    return (
        <>
            <div className='aDiv'>
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}

export default Aposts