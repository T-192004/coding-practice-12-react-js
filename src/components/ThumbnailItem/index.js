// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateActiveImgId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem
  const onUpdateActiveImgId = () => {
    updateActiveImgId(id)
  }
  const thumbnailImg = (
    <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
  )
  return (
    <li className="thumbnail-img-container">
      <button className="thumbnail-img" onClick={onUpdateActiveImgId}>
        {thumbnailImg}
      </button>
    </li>
  )
}

export default ThumbnailItem
