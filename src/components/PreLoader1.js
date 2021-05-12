import React, {useState} from 'react'
import { useEffect } from 'react'
import ReactLoading from 'react-loading'

function PreLoader1() {


    return (
        <>
            <ReactLoading type={"balls"} color={"purple"} height={667} width={375} />
        </>
    )
}

export default PreLoader1