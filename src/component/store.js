import React from 'react'
import { createStore } from 'redux'

const mytate = 0;
    const myStore = (state = mytate, action) => {
        if (action.type === "INCREAMENT") {
            return state + action.payload;
        } else {
            return state;
        }

    }
    const store = createStore(myStore)