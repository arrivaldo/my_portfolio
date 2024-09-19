import React from 'react'
import './CustomSkills.css'

const CustomSkills = () => {
  return (
    <div className='p-customSkills'>
        <div className='flex justify-between'>

        <div>
            <h2>Programming Languages</h2>
            <ul className='flex-col'>
            <li>C</li>
                <li>JavaScript</li>
                <li>TypeScript</li>

            </ul>
        </div>
        <div>
            <h2>Frameworks & Libraries</h2>
            <div className='flex gap-96'>
            <ul className='flex-col'>
                <li>React</li>
                <li>Next.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
               


            </ul>

            <ul>
            <li>Three.js</li>
                <li>GSAP</li>
                <li>Framer</li>
                <li>Tailwind CSS</li>
            </ul>


            </div>
          
        </div>
        <div>
            <h2>Database Management</h2>
            <ul className='flex-col'>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>SQL Server</li>
             


            </ul>
        </div>
        <div>
            <h2>DevOps</h2>
            <ul className='flex-col'>
                <li>Git</li>
                <li>Firebase</li>
             


            </ul>
        </div>
        <div>
            <h2>Platforms & Tools</h2>
            <ul className='flex-col'>
                <li>Pega Platform</li>
            </ul>
        </div>        </div>

    </div>
  )
}

export default CustomSkills