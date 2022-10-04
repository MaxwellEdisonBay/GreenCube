import React from 'react'
import { DeleteButton, EditButton } from './icons'

function PresentationBadge({ currentPres, openModal, handleDelete, handleSelect, selectedPres }) {

    const openEdit = () => {
        openModal("edit", currentPres)
    }

    const onDelete = () => {
        handleDelete(currentPres.id)
    }

    const onSelect = () => {
        handleSelect(currentPres)
    }


    return (
        <div className="flex flex-row space-x-3 align-middle pr-6">
            <button type="button" onClick={onSelect} className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white ${((selectedPres!==null) && (selectedPres.id === currentPres.id)) ? "bg-green-500" : "bg-primary-700"} rounded-xl hover:bg-primary-400 dark:bg-blue-600 dark:hover:bg-blue-700  w-fit `}>
                <p className='align-middle '>{currentPres.name.length > 20 ? currentPres.name.slice(0, 20)+"(...more)" : currentPres.name}</p>
            </button>
            <EditButton onClick={openEdit}/>
            <DeleteButton onClick={onDelete}/>
        </div>

    )
}

export default PresentationBadge