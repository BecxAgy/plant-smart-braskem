import React from 'react'
import { HiExclamation, HiInformationCircle } from 'react-icons/hi'

function Notification() {
    return (
        <div class='max-w-2xl mx-auto mt-2'>
            <div
                id='toast-default'
                class='flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
                role='alert'
            >
                <div class='inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
                    <HiInformationCircle className='w-4 h-4' />
                </div>
                <div class='ml-3 text-sm font-normal'>
                    Apenas isométricos emitidos pela Kempetro, com{' '}
                    <strong>atualização diária às 10h</strong>
                </div>
            </div>
        </div>
    )
}

export default Notification
