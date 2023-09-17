import { createClient } from 'pexels'
import { useEffect, useState } from 'react'
const videosURL = `https://api.pexels.com/videos/`
const client = createClient(
  '3JjxkImgN1m6le6yNM0tteaneGntkxA4HEqLQYawXgLE53YGQDqw9vGp'
)

const Video = () => {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    // Fetch the video data when the component mounts
    client.videos
      .show({ url: `${videosURL}video-of-black-cat-855401` })
      .then((response) => {
        setVideoData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching video data:', error)
      })
  }, [])

  return (
    <div className='main-vid'>
      {videoData ? (
        <video controls width='100%' height='auto'>
          <source src={videoData.video_files[0].link} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
export default Video
