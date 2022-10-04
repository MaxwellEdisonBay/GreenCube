import React from 'react'

function Api() {
  return (
    <div className='flex flex-col px-6 lg:px-48 py-6 space-y-6'>
      <div className="flex flex-col bg-gray-200 p-6 rounded-xl tracking-tighter text-gray-700 text-base dark:text-gray-400 space-y-4" >
        <h1 className='text-lg'>
          The following technologies were used to create this website (<a href='https://github.com/MaxwellEdisonBay/GreenCube' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">check on Github</a>):
        </h1>
        <span>
          <b>
            Frontend:
          </b>
        </span>
        <ul className='list-disc ml-6'>
          <li>
            React + Axios
          </li>
          <li>
            JS, HTML
          </li>
          <li>
            Tailwind CSS
          </li>
        </ul>
        <span><b>
          Backend:
        </b>
        </span>
        <ul className='list-disc ml-6'>
          <li>Python 3 / Flask</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="flex flex-col bg-gray-200 p-6 rounded-xl tracking-tighter text-gray-700 text-base dark:text-gray-400 space-y-4" >

        <h1 className='text-lg'>
          Endpoints:
        </h1>
        <ul className='list-disc ml-6 space-y-4'>
          <li>
            <span className='font-medium	'>GET: <i>/links</i> </span><br />
            <span>
              {'Return object: { links: [ { name: "Name1", url: "http://url_1", id: "1" }, ...] }'}
            </span><br />
            <span><i>Returns all the presentation objects from the DB</i></span>
          </li>
          <li>
            <span className='font-medium	'>POST: <i>/links/update</i> </span><br />
            <span>
              {'Input object: { name: "updatedName", url: "http://updated_url", id: "id" }'}
            </span><br />
            <span>
              {'Return success object: { code: 0 }'}
            </span><br />
            <span><i><b>Updates</b> a presentation by id with new values newName and newUrl</i></span>
          </li>
          <li>
            <span className='font-medium	'>POST: <i>/links/add</i> </span><br />
            <span>
              {'Input object: { name: "newName", url: "http://new_url" }'}
            </span><br />
            <span>
              {'Return success object: { name: "newName", url: "http://new_url", id: "id" }'}
            </span><br />
            <span><i><b>Adds</b> a new presentation with newName and newUrl, returns new created object</i></span>
          </li>
          <li>
            <span className='font-medium	'>POST: <i>/links/delete</i> </span><br />
            <span>
              {'Input object: { id: "id" }'}
            </span><br />
            <span>
              {'Return success object: { code: 0 }'}
            </span><br />
            <span><i><b>Deletes</b> an object by id</i></span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Api