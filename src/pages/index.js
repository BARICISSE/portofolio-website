
import React, { Component } from 'react'
import App from '../components/App'
import Layout from '../components/Layout'
import loaderTest from '../components/LoaderTest'
import '../components/LoaderTest.css'
import anime from 'animejs'

export class index extends Component {
    state = {
        isLoading: true
    }
    render() {
        
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="400"
            height="400"
          >
            <path
              className="path"
              stroke="#64FFDA"
              stroke-width="6"
              fill="#0B0119"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M150,100
        L150,100
        L100,200
        L150,300
        L200,200
        L150,100
        L100,200
        M150,135
        L150,135
        L200,200
        L150,265
        L100,200
        L150,135
        L200,200
        
        
        M200,100
             L200,100
             L200,300
             L300,250
             L225,200
             L350,100
             L200,100
             L200,300
             M210,110
             L210,110
             L320,110
             L210,190
             L210,110
             L320,110
             M210,210
             L210,210
             L270,250
             L210,280
             L210,210
             L270,250"
            />
          </svg>
        )
    }
}

export default index
