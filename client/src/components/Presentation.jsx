import React from 'react'
import CustomModal from './modals'
import PresentationBadge from './PresentationBadge'
import { useState } from 'react'
import { errorNotif, successNotif } from './Notifications';
import axios from 'axios';
import ReactGoogleSlides from "react-google-slides";



function Presentation({ pres, setPres }) {
    const [modalData, setModalData] = useState(null);
    const [selectedPres, setSelectPres] = useState(null)

    const handleSelect = (pres) => {
        setSelectPres(pres)
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post("/links/delete", { id: id })
            if (res.status === 200) {
                const newPres = pres.filter(p =>
                    p.id !== id
                )
                setPres(newPres)
                if (id === selectedPres.id){
                    setSelectPres(null)
                }
                successNotif("Presentation has been deleted")
            } else {
                errorNotif(`Could not delete a presentation. Error code ${res.status}`)
            }
        } catch (error) {
            errorNotif(error.toString())
        }
    }

    const handleEdit = async (updatedData) => {
        try {
            const res = await axios.post("/links/update", updatedData)
            if (res.status === 200) {
                const newPres = pres.map(p => {
                    if (p.id === updatedData.id) {
                        return updatedData
                    } else {
                        return p
                    }
                })
                setPres(newPres)
                if (updatedData.id === selectedPres.id){
                    setSelectPres(updatedData)
                }
                successNotif("Presentation has been edited")
            } else {
                errorNotif(`Failed to edit a presentation. Error code ${res.status}`)
            }
        } catch (error) {
            errorNotif(error.toString())
        }
    }

    const handleAdd = async (newData) => {
        try {
            const res = await axios.post("/links/add", newData)
            if (res.status === 200) {
                const newPres = [...pres]
                newPres.push(res.data.obj)
                setPres(newPres)
                successNotif("New presentation has been added")
            } else {
                errorNotif(`Failed to add a presentation. Error code ${res.status}`)
            }
        } catch (error) {
            errorNotif(error.toString())
        }
    }

    function openModal(type, currentPres) {
        setModalData({ type: type, pres: currentPres });
        // console.log(currentPres)
    }

    return (
        <div>
            <CustomModal modalData={modalData} setModalData={setModalData} onAdd={handleAdd} onEdit={handleEdit} />
            <div className="flex flex-col space-y-4 mb-12 sm:mb-6 px-6 lg:px-48 py-6">
                <div className="bg-primary-100 border-gray-200 px-6 py-6 dark:bg-gray-800 flex flex-col space-y-4 rounded-xl">
                    <div className="flex flex-row justify-between">
                        <span className="tracking-tighter text-gray-700 md:text-lg dark:text-gray-400">{selectedPres === null ? "Hi! Please, choose your presentation:" : <div>Presentation selected: <b>{selectedPres.name.slice(0, 20)}</b></div>}</span>

                        <button className="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex items-center rounded-xl w-fit" onClick={() => openModal("add", null)}>
                            <img className="h-3" src="icons/add.png" alt="Add icon" />
                        </button>
                    </div>

                </div>
                <div className="bg-primary-100 border-gray-200 px-6 py-6 dark:bg-gray-800 flex flex-col space-y-4 rounded-xl">

                    <div className="scrollbar-thin space-y-3 overflow-y-scroll scrollbar-thumb-primary-700 scrollbar-track-transparent hover:scrollbar-thumb-primary-500 h-36 scrollbar-thumb-rounded-full">
                        {
                            pres.map(currentPres => (
                                <PresentationBadge currentPres={currentPres} key={currentPres.id} openModal={openModal} handleDelete={handleDelete} handleSelect={handleSelect} selectedPres={selectedPres} />
                            ))
                        }

                    </div>
                </div>
                <div className="bg-gray-200 border-gray-200 px-6 py-6 dark:bg-gray-800 flex flex-col space-y-4 rounded-xl items-center sm:h-screen lg:h-196">
                    {selectedPres !== null &&
                        <div className="sm:w-2/3 lg:w-full h-full">
                            {extractSlidesKey(selectedPres.url) !== null ?
                                <ReactGoogleSlides
                                    width="100%"
                                    height="100%"
                                    slidesLink={selectedPres.url}
                                    slideDuration={5}
                                    position={1}
                                    showControls
                                    loop
                                /> : <span>Error: Invalid presentation link</span>}
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

const regex = new RegExp(
    `(((https|http):\/\/|)docs\.google\.com\/presentation\/d\/)(.+?(?=(\/.+|\/|$)))`
);

// Extracts the slide id from the share-able url
const extractSlidesKey = (slidesUrl) => {
    const match = regex.exec(slidesUrl);
    return match ? match[4] : null;
};

export default Presentation