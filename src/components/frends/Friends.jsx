const Friends = () => {
  return (
    <>
      <h2 className='mb-3'>Друзья</h2>
      <div className='flex gap-2'>
        <div>
          <img className='rounded-full w-10 h-10'
               src='https://pushinka.top/uploads/posts/2023-03/1680209704_pushinka-top-p-avatarki-dlya-suetologov-vkontakte-42.jpg'
               alt='' />
          <span>Саша</span>
        </div>
        <div>
          <img className='rounded-full w-10 h-10'
               src='https://yt3.googleusercontent.com/IQAlIe4ujExb3d_YvX-gRi9DvIFRPTgE4MlislO77WiBuKlQMluF5jvIazw-H2LqxS6epNw7=s900-c-k-c0x00ffffff-no-rj'
               alt='' />
          <span>Маша</span>
        </div>
        <div>
          <img className='rounded-full w-10 h-10'
               src='https://sun6-23.userapi.com/s/v1/if2/QzWQl7RLPsvcJlS7n1pTsvV4_o4_DiC5KlTczWpGaVyoSIj0TphVDP4z50IYc_-2xDX9mQu8So1lnFSlTelEu6wX.jpg?size=900x900&quality=96&crop=0,0,900,900&ava=1'
               alt='' />
          <span>Катя</span>
        </div>
      </div>
    </>
  )
}

export default Friends
