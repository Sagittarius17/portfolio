import React from 'react';

function Projects() {
    return (
        <div id="projects" className="pt-[70px]">
            <h2 className="flex sm:flex text-4xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">PROJECTS</h2>
            <div className="grid grid-cols-1 m-8 sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Chatroom</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="https://github.com/Sagittarius17/python-chatroom" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project on Github</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 2" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">P2P Text File Transfer</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="https://github.com/Sagittarius17/python-p2p-file-transfer" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project on Github</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 3" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Python Small Projects</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project on Github</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 4" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Project 4</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 4" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Project 5</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/640x360" alt="Project 4" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Project 6</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ante ac velit vehicula, ut pellentesque enim efficitur.</p>
                        <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">View project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects