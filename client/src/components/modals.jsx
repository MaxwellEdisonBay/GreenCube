import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



function CustomModal({ modalData, setModalData, onAdd, onEdit }) {
    const isEdit = (modalData !== null) && (modalData.type === "edit")
    const isAdd = (modalData !== null) && (modalData.type === "add")

    // console.log(isEdit, isAdd)

    const [nameText, setNameText] = useState("")
    const [nameError, setNameError] = useState(null)

    const [urlText, setUrlText] = useState("")
    const [urlError, setUrlError] = useState(null)
    // console.log(nameError, urlError)

    const validateForm = () => {
        setNameError(null)
        setUrlError(null)
        if (!nameText.match(/^[a-zA-Z0-9\u00D8-\u00F6 ]+$/) && nameText !== "") {
            setNameError("Only letters and numbers are allowed!")
        }

        if (!(/^(ftp|http|https):\/\/[^ "]+$/.test(urlText)) && urlText !== "") {
            setUrlError("Url is invalid")
        }

    }

    const validateEmpty = () => {
        let flag = true
        if (nameText.trim() === "") {
            setNameError("Name field cannot be empty!")
            flag = false
        }
        if (urlText.trim() === "") {
            setUrlError("URL field cannot be empty!")
            flag = false
        }
        return flag
    }

    useEffect(() => {
        const updateFields = () => {
            setNameText(isEdit ? modalData.pres.name : "")
            setUrlText(isEdit ? modalData.pres.url : "")
        }
        updateFields()
    }, [modalData])

    useEffect(() => {
        if (nameText !== null && urlText !== null) {
            validateForm()
        }
    }, [nameText, urlText])

    const handleSubmit = () => {
        // console.log("submittes", nameError, urlError)
        // console.log(isAdd)
        // console.log(validateEmpty())
        if (validateEmpty() && nameError === null && urlError === null) {
            // console.log(isAdd)
            // console.log("onAdd")
            if (isAdd) {
                onAdd({ name: nameText.trim(), url: urlText.trim() })
            } else if (isEdit) {
                onEdit({ name: nameText.trim(), url: urlText.trim(), id: modalData.pres.id })
            }
            closeModal()
        }
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setModalData(null);
    }

    return (
        <div>
            <Modal
                isOpen={modalData !== null}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="w-full max-w-lg">
                    <div className="w-full px-3 -mx-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${nameError !== null && "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder={isAdd ? "My Presentation" : null} value={nameText} onChange={e => setNameText(e.target.value)} />
                        {nameError !== null && <p className="text-red-500 text-xs italic">{nameError}</p>}
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Url
                            </label>
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${urlError !== null && "border-red-500"} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} id="grid-url" type="url" placeholder={isAdd ? "http://my-presentation-url" : null} value={urlText} onChange={e => setUrlText(e.target.value)} />
                            {urlError !== null && <p className="text-red-500 text-xs italic">{urlError}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={handleSubmit} className=" items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-xl hover:bg-primary-400 dark:bg-blue-600 dark:hover:bg-blue-700  w-fit">

                            {isEdit ? <p className='align-middle '>Edit</p> : <p className='align-middle '>Create</p>}

                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default CustomModal