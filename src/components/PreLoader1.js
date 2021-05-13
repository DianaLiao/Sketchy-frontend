import React, {useState} from 'react'
import { useEffect } from 'react'
import ReactLoading from 'react-loading'

function PreLoader1() {


    return (
        <>
            <div className="loader-body">
                <ReactLoading type={"balls"} color={"purple"} height={300} width={375} />
                <h1>Sketchy is loading...</h1>
            </div>
        </>
    )
}

export default PreLoader1