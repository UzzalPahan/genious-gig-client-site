import React from 'react'

const Review = () => {
  return (
    <div>

<div className="bg-gray-100 p-6">
  <h1 className="text-2xl font-bold text-center mb-6">Customer Reviews</h1>
  <div className="flex flex-wrap justify-center -mx-4">
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co/fFBwLJ6/undraw-Female-avatar-efig.png" alt="Customer 1" className="w-12 h-12 rounded-full mr-4"/>
          <p className="font-semibold text-lg">John Doe</p>
        </div>
        <div className="flex items-center mt-2">
          <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c-.3 0-.6.1-.8.4l-3.1 3-5.2.6c-.7.1-1.2.7-1.1 1.4.1.7.7 1.2 1.4 1.1l4.7-.5 2.9 2.8c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-1.6 1.6 3.8 3.8 1.6-1.6c.4-.4.9-.4 1.3 0 .2.2.4.5.4.9 0 .4-.1.8-.4 1.1l-2.9 2.9 1.4 1.4c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-3.7 3.7-7.1.8c-.7.1-1.2.6-1.4 1.3-.1.7.6 1.3 1.3 1.4l7.9.9 3.6 3.6c1 1 2.9 1 4 0 1-1 1-2.9 0-4l-3.6-3.6 3.9-.5c.7-.1 1.2-.7 1.1-1.4-.1-.7-.7-1.2-1.4-1.1l-2.2.3-2.3-2.3c-.3-.3-.4-.7-.3-1.1-.1-.4.1-.8.4-1.1l5-5c.6-.6.6-1.5 0-2.1l-5-5-3.1 3.1c-.3.3-.7.4-1.1.4z"/>
          </svg>
          <p className="text-yellow-500 font-semibold ml-2">4.5</p>
        </div>
        <p className="text-gray-700 mt-4">Great product! I'm very satisfied with my purchase.</p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co/09h3kbM/undraw-Male-avatar-g98d.png" alt="Customer 2" className="w-12 h-12 rounded-full mr-4"/>
          <p className="font-semibold text-lg">Jane Smith</p>
        </div>

        <div className="flex items-center mt-2">
          <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c-.3 0-.6.1-.8.4l-3.1 3-5.2.6c-.7.1-1.2.7-1.1 1.4.1.7.7 1.2 1.4 1.1l4.7-.5 2.9 2.8c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-1.6 1.6 3.8 3.8 1.6-1.6c.4-.4.9-.4 1.3 0 .2.2.4.5.4.9 0 .4-.1.8-.4 1.1l-2.9 2.9 1.4 1.4c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-3.7 3.7-7.1.8c-.7.1-1.2.6-1.4 1.3-.1.7.6 1.3 1.3 1.4l7.9.9 3.6 3.6c1 1 2.9 1 4 0 1-1 1-2.9 0-4l-3.6-3.6 3.9-.5c.7-.1 1.2-.7 1.1-1.4-.1-.7-.7-1.2-1.4-1.1l-2.2.3-2.3-2.3c-.3-.3-.4-.7-.3-1.1-.1-.4.1-.8.4-1.1l5-5c.6-.6.6-1.5 0-2.1l-5-5-3.1 3.1c-.3.3-.7.4-1.1.4z"/>
          </svg>
          <p className="text-yellow-500 font-semibold ml-2">5.0</p>
        </div>

        <p className="text-gray-700 mt-4">This is the best service I've ever used. Highly recommended!</p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co/fFBwLJ6/undraw-Female-avatar-efig.png" alt="Customer 2" className="w-12 h-12 rounded-full mr-4"/>
          <p className="font-semibold text-lg">Jane Smith</p>
        </div>
        <div className="flex items-center mt-2">
          <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c-.3 0-.6.1-.8.4l-3.1 3-5.2.6c-.7.1-1.2.7-1.1 1.4.1.7.7 1.2 1.4 1.1l4.7-.5 2.9 2.8c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-1.6 1.6 3.8 3.8 1.6-1.6c.4-.4.9-.4 1.3 0 .2.2.4.5.4.9 0 .4-.1.8-.4 1.1l-2.9 2.9 1.4 1.4c.3.3.4.7.4 1.1 0 .3-.1.6-.4.9l-3.7 3.7-7.1.8c-.7.1-1.2.6-1.4 1.3-.1.7.6 1.3 1.3 1.4l7.9.9 3.6 3.6c1 1 2.9 1 4 0 1-1 1-2.9 0-4l-3.6-3.6 3.9-.5c.7-.1 1.2-.7 1.1-1.4-.1-.7-.7-1.2-1.4-1.1l-2.2.3-2.3-2.3c-.3-.3-.4-.7-.3-1.1-.1-.4.1-.8.4-1.1l5-5c.6-.6.6-1.5 0-2.1l-5-5-3.1 3.1c-.3.3-.7.4-1.1.4z"/>
          </svg>
          <p className="text-yellow-500 font-semibold ml-2">5.0</p>
        </div>
        <p className="text-gray-700 mt-4">This is the best service I've ever used. Highly recommended!</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Review