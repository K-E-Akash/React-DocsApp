import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
      <div className='w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</div>
      <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background