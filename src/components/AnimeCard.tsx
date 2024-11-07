import React from 'react'

const AnimeCard = ({ id, title, synopsis, aired, images }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short', 
      day: '2-digit', 
      year: 'numeric' 
    });
  };

  const truncateText = (text: string, wordLimit = 20) => {
    const words = text.split(' '); 
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; 
    }
    return text; 
  }

  return (
    <div key={id} className="card bg-base-100 w-100 shadow-xl mt-3">
      <figure className='h-[200px]'>
        <img className='w-full h-full overflow-hidden object-cover'
          src={images.jpg.image_url}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <div className="badge badge-secondary">{formatDate(aired.from)}</div>
        <p>{truncateText(synopsis)}</p>
        {/* <div className="card-actions justify-between">
          <div className='flex items-center gap-1'>
            <button className="btn btn-ghost justify-start" onClick={() => setQuantity(quantity + 1)}>+</button>
            <p>Quantity: {quantity}</p>
            <button className="btn btn-ghost justify-start" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
          </div>
          <button className="btn btn-primary justify-end" onClick={() => addToCart(data.id, quantity)}>Buy Now</button>
        </div> */}
      </div>
    </div>
  )
}

export default AnimeCard