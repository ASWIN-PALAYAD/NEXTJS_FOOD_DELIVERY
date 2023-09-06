import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 '>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-100'>
            <td className='hidden md:block py-6 px-1'>43535564654</td>
            <td className='py-6 px-1'>19/09/2023</td>
            <td className='py-6 px-1'>299</td>
            <td className='hidden md:block'>burgur (2), veggie pizza (2)</td>
            <td className='py-6 px-1'>On the way (approx 10min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-200'>
            <td className='hidden md:block py-6 px-1'>43535564654</td>
            <td className='py-6 px-1'>19/09/2023</td>
            <td className='py-6 px-1'>299</td>
            <td className='hidden md:block'>burgur (2), veggie pizza (2)</td>
            <td className='py-6 px-1'>On the way (approx 10min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-200'>
            <td className='hidden md:block py-6 px-1'>43535564654</td>
            <td className='py-6 px-1'>19/09/2023</td>
            <td className='py-6 px-1'>299</td>
            <td className='hidden md:block'>burgur (2), veggie pizza (2)</td>
            <td className='py-6 px-1'>On the way (approx 10min)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderPage