import React from 'react'
import axios from 'axios'

export default function Home() {

    const[formData, setFormData] = React.useState({
        sendtext : "",
    })

    const handlesumit = async (e) =>  {
        e.preventDefault();
        console.log(formData);

        try{
            const response = await axios.post("http://localhost:5000/send-email",formData)
            alert("Email sent successfully");
        }
        catch(error){
            console.error(error.response?.data || error.message);
            alert(error.response?.data?.error || "An error occurred while sending email");
        }

        
    }
    const handlechange = (e) => {
        setFormData({...formData,
            [e.target.name]:e.target.value
        });
    }

  return (
    <div className='align-center' >
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

        <form onSubmit={handlesumit}>
            
            <div>
                

                <label htmlFor="toemail" className="block text-sm font-bold  text-gray-700 text-4xl">Email Subject </label>

                <input type ="Subject" 
                id="Subject"
                name="Subject"
                onChange={handlechange}
                value={formData.Subject}
                placeholder=" Enter Subject"
                className="mt-1 p-2 block w-full font-bold  hover:bg-indigo-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />


<label htmlFor="toemail" className=" pt-4 block text-sm font-bold  text-gray-700 text-4xl">Send Email To </label>

                <input type ="toemail" 
                id="toemail"
                name="toemail"
                onChange={handlechange}
                value={formData.toemail}
                 placeholder=" Enter Send Email ID"
                className="mt-1 p-2 block w-full font-bold  rounded-md hover:bg-indigo-200   border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />





                     <label htmlFor="email" className="pt-4  block text-sm font-bold text-4xl  text-gray-700">Sending Email</label>

                <input type ="sendtext" 
                id="sendtext"
                name="sendtext"
                onChange={handlechange}
                value={formData.sendtext}
                className="mt-1 p-2 block w-full  font-bold  rounded-md hover:bg-indigo-200   border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter Message"
                />

                <button type="submit" className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Email</button> 


            </div>
        </form>
    </div>
  )
}
