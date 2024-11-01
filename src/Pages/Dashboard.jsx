import React, { useEffect, useState } from 'react'
import Topproducts from '../Components/Dashboard/Topproducts'
import axios from 'axios';
import Statuscount from '../Components/Dashboard/Statuscount';
import ProbabltySvg from '../Assets/Img/PropobaltySvg.svg'

const apiUrl = import.meta.env.VITE_API_URL;


const DashBoard = () => {

    // getTopProduct
    const [topProduct, settopProduct] = useState([])
    const getTopProduct = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/Dashboard/WonStageProduct`)
            settopProduct(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // getStatus
    const [dataset, setdataset] = useState([])
    const getStatus = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/Dashboard/StatusCount`);
            console.log()
            setdataset(response.data)
        } catch (error) {
            console.log()
        }
    }

    // getProbablty
    const [Probablity, setProbablity] = useState('')
    const getProbablity = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/Dashboard/AverageProbability`)
            setProbablity(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTopProduct()
        getStatus()
        getProbablity()

        return () => {
            settopProduct()
        };

    }, [])
    return (
        <div>

            <div className='bg-[#ffff] w-[370px] h-full p-6 flex justify-between'>
                <div>
                    <p className='text-[18px] text-[#7C838B]'>Probablity</p>
                    <div>
                        <p className='text-[49px] font-semibold'>{Probablity}%</p>
                    </div>
                </div>
                <div>
                    <img src={ProbabltySvg} alt="" />
                </div>
            </div>

            <div className='flex justify-evenly items-center'>
                <Topproducts topProduct={topProduct} />
                <Statuscount dataset={dataset} />
            </div>
        </div>
    )
}

export default DashBoard
