import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from"./AlbumItem"
import SongItems from './songItems'


const DisplayHome = () => {
  return (
    <div>
        <Navbar/>
        <div className="mb-4">
          <h1 className='my-5 font-bold text-2xl'>Featured Chart</h1>
          <div className="flex overflow-auto p ">
            {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
        <div className="mb-4">
          <h1 className='my-5 font-bold text-2xl'>Biggest Hit's</h1>
          <div className="flex overflow-auto p ">
            {songsData.map((item, index) => (<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
          </div>
        </div>
    </div>
  )
}

export default DisplayHome