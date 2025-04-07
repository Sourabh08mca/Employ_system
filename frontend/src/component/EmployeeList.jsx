import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function EmployeeList() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setCards(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteCard/${id}`)

        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
    


  return (
    
    <div>
     <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Employee List</h1>
    
    
</div>
<div className='mb-6'> 
<Link to="/addemployee" class="bg-green-400 text-black px-4 py-2 rounded-md text-2xl font-bold " >Add card</Link>
</div>

<section id="Projects"
                       class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                   
                   {cards.map((card)=> {
                       return (
                   
                   
                       <div  class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                           
                   
                   <div class="flex flex-row justify-center mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl"></p>
                                   
                                   
                               </div>
                               <div className="flex px-4  mb-2">
                                                       <p className="text-blue-600 text-lg">Name:</p>
                                                       <span class="text-lg font-bold text-black">
                                                          {card.name}
                                                          </span>
                                                   </div>
                                      
                                                   <div className="px-4 flex mb-2">
                                                       <p className="text-blue-600 text-lg">Position:</p>
                                                       <span className="text-lg font-bold text-black">
                                                           {card.position}
                                                       </span>
                                                   </div>
                                <div class=" px-4 flex mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl">Department:</p>
                                   <span class="text-lg font-bold text-black truncate block capitalize">
                                   {card.department}
                                   </span>
                                   
                               </div>

                               <div class="px-4 flex  mt-2 w-72">
                                   <p class="text-blue-600 mr-3   text-xl">Salary:</p>
                                   <span class="text-lg font-bold text-black truncate block capitalize">
                                   {card.salary}
                                   </span>
                                   
                               </div>

                               
                               <div>
                               <div class="flex justify-center items-center">
                               
                   <div class="relative inline-flex  group mt-4 space-x-2">
                       <div
                           class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                       </div>
                       <Link to={`/updateemployee/${card._id}`} href="#" title="Get quote now"
                           class="relative inline-flex items-center justify-center px-8 py-1 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button">Edit
                       </Link>
                       <button  href="#" title="Get quote now"
                           class="relative inline-flex items-center justify-center px-8 py-1 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                           role="button" onClick={(e) => handleDelete(card._id)}
                           >Delete
                       </button>
                   </div>
                   </div>
                               </div>
                           
                       </div>
                );
            })}

                   </section>





<script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>

    </div>
  )
}

export default EmployeeList
