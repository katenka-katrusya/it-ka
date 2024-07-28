import styles from './Post.module.scss'

const Post = ({message, likesCount}) => {
  return (
    <div className={styles.post}>
      <div className='flex gap-6 items-center mb-2'>
        <img src='https://sun9-75.userapi.com/n4BmOcIjKJmDE0KHYjcpWW-EcYGoYveZgTp6Hg/T3yF_eWqfCU.jpg' alt='avatar'/>
        <p>{message}</p>
      </div>
      <span>Like</span> {likesCount}
    </div>
  )
}

export default Post
