import React from 'react'

function Resume() {
    return (
        <div className="flex flex-col items-center text-gray-700 mt-6 mb-12">
            <div className='flex flex-col w-2/3 space-y-6'>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
                        <div className="flex flex-col">
                            <span>+1 (647)-625-3061</span>
                            <span>ivanteslenko@hotmail.com</span>
                            <span>11 Balsamo Street Vaughan, ON, Canada</span>
                        </div>
                        <div className="h-24">
                            <img src='./ivan.jpg' className='object-scale-down h-full' />
                        </div>
                    </div>
                    <span>Detailed-oriented entry-level professional with experience in <b>Software Development</b> delivering <b>efficient</b> code focused on <b>team collaboration</b> and constant <b>self-improvement</b>.</span>
                </div>
                <div className="flex flex-col">
                    <h2 className='text-lg text-primary-500 font-medium'>EXPERIENCE</h2>
                    <table className="table-fixed ">
                        <tbody>
                            <tr>
                                <td className='w-24 hidden md:table-cell'>
                                    <div className="flex flex-col items-center">
                                        <span>1/2022</span>
                                        <span>-</span>
                                        <span>9/2022</span>
                                    </div>
                                </td>
                                <td >
                                    <div className='flex flex-col pt-6 pl-0 sm:pl-12'>
                                        <span><b>Android Developer</b></span>
                                        <span><i>Cleverlance Enterprise Solutions, Prague</i></span>
                                        <ul className='list-disc pl-6'>
                                            <li>Developed mobile applications for corporate clients, tested new features, and maintained legacy code. Proactively interacted with other team members and product owners</li>
                                            <li>Created an Android SmartWatch app for the Albert chain of supermarkets to monitor the activity of the warehouse workers.</li>
                                            <li>Utilized optimal frameworks and architectural patterns according to industry best practices and SOLID principles.</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='hidden md:table-cell'>
                                    <div className="flex flex-col items-center">
                                        <span>12/2020</span>
                                        <span>-</span>
                                        <span>12/2022</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex flex-col pt-6 pl-0 sm:pl-12'>
                                        <span><b>Data Scientist, Analyst</b></span>
                                        <span><i>Megaknihy.cz, Prague</i></span>
                                        <ul className='list-disc pl-6'>
                                            <li>Delivered in-depth analysis and data visualization to prepare insightful reports improving the company’s cost efficiency</li>
                                            <li>Effectively participated in the teamwork and contributed to the success of the projects</li>
                                            <li>Created an API to classify customer support emails. Worked with NLP and machine learning technologies and implemented a testing phase with continuous quality monitoring. This resulted in a <b>10% increase</b> in the support team's efficiency</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='hidden md:table-cell'>
                                    <div className="flex flex-col items-center">
                                        <span>4/2020</span>
                                        <span>-</span>
                                        <span>9/2020</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex flex-col pt-6 pl-0 sm:pl-12'>
                                        <span><b>IT Specialist</b></span>
                                        <span><i>Smart Homes Real Estate, Prague</i></span>
                                        <ul className='list-disc pl-6'>
                                            <li>Set up and maintained a CRM system, and developed a chatbot to automatize the sales processes</li>
                                            <li>Created a system to monitor the online advertising conversion efficiency</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="flex flex-col space-y-6">
                    <h2 className='text-lg text-primary-500 font-medium'>TECHNICAL SKILLS</h2>
                    <div className="flex flex-col space-y-2">
                        <span><b>Experience in Mobile Native Development, Data Science, and Software Engineering</b></span>
                        <ul className='list-none list-inside space-y-6'>
                            <li>Mobile development:

                                <ul className='list-disc list-inside pl-6'>
                                    <li>Core: <b>Java, Kotlin, Android API, Flutter</b> (basics)</li>
                                    <li>Experience in <b>WearOS</b> (smartwatch) development</li>
                                    <li>Networking frameworks: <b>Retrofit / OKHttp3</b></li>
                                    <li>FrontEnd: <b>Jetpack Compose, XML Layouts</b></li>
                                    <li>Dependency Injection: <b>Dagger/Hilt, Koin</b></li>
                                    <li>Image Loading: <b>Coil, Picasso, Lottie</b></li>
                                    <li>Concurrency: <b>Kotlin Coroutines</b></li>
                                    <li>Databases: <b>Firebase, MongoDB, Room</b></li>
                                    <li>Other tools: <b>Gradle, Maven, Emulators, Firebase Crashlytics, Localise</b></li>
                                    <li>Prototyping: <b>Figma, Adobe Photoshop</b></li>
                                </ul>
                            </li>
                            <li>Machine Learning:

                                <ul className='list-disc list-inside pl-6'>
                                    <li><b>Python with NumPy and Pandas, PyPlot, Folium</b></li>
                                    <li><b>Scikit Learn, Keras</b> (basics), <b>NLP methods</b></li>
                                    <li><b>SQL, C language</b></li>
                                </ul>
                            </li>
                            <li>Web Development:

                                <ul className='list-disc list-inside pl-6'>
                                    <li><b>Javascript, HTML/CSS</b></li>
                                    <li><b>React, Node.js, Django</b></li>
                                    <li><b>Heroku, Apache Web Server, Google Cloud Platform</b></li>
                                </ul>
                            </li>
                            <li>OS, Version Control, Project Management

                                <ul className='list-disc list-inside pl-6'>
                                    <li><b>Git, Gitlab, Github, Bitbucket</b></li>
                                    <li><b>Ubuntu/Linux, Shell, SSH</b></li>
                                    <li><b>Jira</b></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <h2 className='text-lg text-primary-500 font-medium'>EDUCATION</h2>
                    <div className="flex flex-col space-y-3">
                        <span><b>Czech Technical University in Prague, 08/2020-Present</b></span>
                        <span>Faculty of Electrical Engineering - BS Cybernetics and Robotics</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <h2 className='text-lg text-primary-500 font-medium'>PROJECTS</h2>
                    <div className="flex flex-col space-y-3">
                        <span><b>ScratchEngine, August 2022 <a href='https://github.com/MaxwellEdisonBay/ScratchEngine' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">[github]</a></b></span>
                        <span>Developing a 2D game engine in Java from scratch. Exploring the application of linear algebra and OpenGL shaders for graphics rendering using LWJGL.</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span><b>Ukrainian News, May 2022 <a href='https://github.com/MaxwellEdisonBay/UkraineNews' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">[github</a>, <a href='https://ukrajinazije.cz/' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">website]</a></b></span>
                        <div className="flex flex-col">
                            <span>Coded a news website and backend that allowed real-time tracking of the news from exclusive Ukrainian sources and translating them into Czech using DeepL API to make them available to the Czech audience.</span>
                            <span>Created a custom Telegram client (analogue of Facebook Messenger popular in Ukraine) for news parsing.</span>
                            <span>Technologies used: <i>React, Node.js, TelegramAPI, MongoDB, Firebase Storage, DeepL API, Passport.js, Git</i></span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span><b>APOlogy, May 2021 <a href='https://gitlab.fel.cvut.cz/rastvdmy/apology/-/tree/dev' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">[github]</a></b></span>
                        <div className="flex flex-col">
                            <span>Coded a full-fledged 2D game based on an ARM controller. The main task was to implement OOP and process peripherals using a low-level programming language. Implemented an artificial intelligence model of a computer opponent.</span>
                            <span>Technologies used: <i>C language, Git</i></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume