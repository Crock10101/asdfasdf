import React, { Component } from 'react';
import Navbar from './Navbar'
import '../styles/global.css'
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Footer from './Footer';



export default function Layout({ children }) {
  
    return (
        
        <div className = "layout">
            <Navbar />
            
        { children }
            <Footer />
     
        </div>
    )
}


