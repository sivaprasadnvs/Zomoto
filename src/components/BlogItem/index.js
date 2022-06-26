import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, rate, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <div>
          {' '}
          <img
            alt="biryani"
            src="https://b.zmtcdn.com/data/dish_photos/919/a249edd3c1016ff01446ca34a0bfe919.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
          />
          <h1 className="best-seller">BESTSELLER</h1>
        </div>
        <div>
          <h1 className="blog-title">{title}</h1>
          <h1 className="blog-title">{rate}</h1>
          <p className="blog-published-date">{publishedDate}</p>
          <p className="blog-description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
