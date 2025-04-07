import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'


function UpdateEmployee() {
    const {id} = useParams()
     const [name, setName] = useState()
        const [position, setPosition] = useState()
        const [department, setDepartment] = useState()
        const [salary, setSalary] = useState()
        const navigate = useNavigate()

         useEffect(() => {
                axios.get(`http://localhost:3001/getCard/${id}`)
                .then(result => {console.log(result)
                    setName(result.data.name)
                    setPosition(result.data.position)
                    setDepartment(result.data.department)
                    setSalary(result.data.salary)
                })
                .catch(err => console.log(err))
            },[])

            const Update = (e) =>{
                e.preventDefault();
                axios.put("http://localhost:3001/updateemployee/"+id, {name,position,department,salary})
                .then(result => { 
                console.log(result)
                
             })
                .catch(err => console.log(err))
                navigate('/')

            }
        
  return (
    <div>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Update Empolyee
        </h2>
        
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={Update} >
                <div>
                    <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Enter Name" type="text" required=""
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                value={name}  onChange={(e) => setName(e.target.value)}
                            />
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="username" class="block text-sm font-medium leading-5 text-gray-700">Position</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            
                        </span>
                        <input id="username" name="username" placeholder="Enter Position" type="text" required=""
                            class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            value={position}  onChange={(e) => setPosition(e.target.value)}
                            />
                    </div>
                </div>


               

                <div class="mt-6">
                    <label for="username" class="block text-sm font-medium leading-5 text-gray-700">Department</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            
                        </span>
                        <input id="username" name="username" placeholder="Enter Department" type="text" required=""
                            class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            value={department}  onChange={(e) => setDepartment(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <label for="username" class="block text-sm font-medium leading-5 text-gray-700">Salary</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            
                        </span>
                        <input id="username" name="username" placeholder="Enter Salary" type="text" required=""
                            class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            value={salary}  onChange={(e) => setSalary(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit" 
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Update Employee
                        </button>
                    </span>
                </div>
            </form>

        </div>
    </div>
</div>
    </div>
  )
}

export default UpdateEmployee
