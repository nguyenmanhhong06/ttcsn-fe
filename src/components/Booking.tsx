import React, { useContext } from 'react'
import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'
import { invoiceTicket } from 'src/apis/ticket.api'
import { AppContext } from 'src/context/app.context'
import { formatDate } from 'src/utills/date'

function Booking() {
  const { ticket } = useContext(AppContext)
  const { mutate } = useMutation({
    mutationFn: (id: string) => invoiceTicket(id)
  })
  // console.log(ticket)
  function handleSubmit(id: string) {
    console.log(id)
    mutate(id)
  }
  return (
    <div className='bg-[#edeef1] h-full pt-2'>
      <div className='mx-auto max-w-6xl px-8 pb-4'>
        {ticket?.map((item: any, index: any) => (
          <div className='p-4 grid bg-white grid-cols-3 mt-4 shadow-sm rounded-md overflow-hidden'>
            <div className='col-span-1 flex gap-3 rounded-md overflow-hidden  pt-2'>
              <span>{item.departure}</span>
              <div className='relative z-0'>
                <span className='absolute text-xs top-[-7px] left-[70px]'>{formatDate(item.date)}</span>
                <img
                  src='https://www.vietnamairlinesgiare.vn/wp-content/themes/vietnamairlines/images/flight-icon.svg'
                  alt=''
                />
                <span className='absolute text-xs top-[17px] left-[70px] z-10'>Bay thẳng</span>
              </div>
              <span>{item.departure}</span>
            </div>
            <div className='col-span-1 flex flex-col items-center gap-3'>
              <div>
                <img src='https://data.vietnambooking.com/flight/icon_airlines/big/logo_VJ.png' alt='' />
              </div>
              <p>Vietjet Air</p>
            </div>
            <div className='col-span-1 flex flex-col items-center justify-end'>
              <p className='text-lg text-[#e5a930] font-semibold'>{item.price} VND</p>
              <div>
                <button onClick={() => handleSubmit(item._id)} className='px-4 py-2 bg-[#007295] text-white mt-4'>
                  Đặt ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Booking
