import React from 'react'
import profileImg from '../assets/user_icon.png';
import { Link } from 'react-router-dom';


function SearchResult({results , query}) {
  return (
    <>
    { 
    query !=="" &&
    <div className='max-h-96 min-h-fit w-3/5 bg-white m-1 relative shadow-xl rounded-xl sm:left-32 overflow-auto box-border'>
        { 
      results.length==0 ? <h1 className="my-1/2 mx-auto w-fit">No Results found</h1> :
      results.map((result, index) => {
        return (
        <Link to={result['Student Name']}>
        <div key={index} className='border rounded-md my-1 shadow-xl'>
          <div className='flex items-center p-1'>
          <img src={profileImg} alt="" className='w-12 rounded-full border border-1px border-sky-800 mx-1'/>
          <div className='text-left'>
          <p className='text-md font-medium m-1 text-sky-800'>{result['Student Name']}</p>
          <p className='text-sm p-1 text-gray-500'>{result.Department}</p>
          </div>
          </div>
          
        </div></Link>)
        
      })
    }
    </div>
    }
    </>
  )
}

export default SearchResult