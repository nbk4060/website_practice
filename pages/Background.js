import Image from 'next/image'


export default function Background() {
    return (
        <>
            <div className='relative'>
        <div className="w-full flex absolute justify-around z-0 h-full">
          <div className="col-start-1 h-full w-px border-l border-gray-200" />
          <div className="h-full w-px border-l border-gray-200" />

          <div className="h-full w-px border-l border-gray-200" />

          <div className="h-full w-px border-l border-gray-200" />
          <div className="col-end-1 h-full w-px border-l border-gray-200" />
        </div>
        </div>
        </>
    )
}