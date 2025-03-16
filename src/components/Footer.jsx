import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">EduNexum</h3>
            <p className="text-gray-400 mt-2">© 2023 EduNexum. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <div>
              <h4 className="font-semibold">Home</h4>
              <a href="#" className="block text-gray-400 hover:text-white">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white">Portfolio</a>
            </div>
            <div>
              <h4 className="font-semibold">Terms</h4>
              <a href="#" className="block text-gray-400 hover:text-white">Services</a>
              <a href="#" className="block text-gray-400 hover:text-white">License</a>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-gray-400">Email: code@edunexum.com</p>
              <p className="text-gray-400">Phone: +91 829829480</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer