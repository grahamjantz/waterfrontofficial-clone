import React, { useEffect } from 'react'
import * as Scroll from 'react-scroll'
import './Merch.css'

import redTransition from '../../images/textures/redTransition.1.png'

import merchItems from './merchObject.js'


const Merch = ({ name }) => {

  // const [fetchedMerchItems, setFetchedMerchItems] = useState([])

  // const baseUrl = 'https://api.printify.com/v1/'
  // const productsReq = 'shops/{shop_id}/products.json'
  const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijk1MmI4YTcxOWM1YTY1MDBjYjVhY2Y4ZDQyMjBmNzJhNTQ2MjliMjE5ZWE4ODMzNGQ3N2Y1YmJiZmY5NzcxMTMwYjZlMjJiMjU4ZmIzZTFkIiwiaWF0IjoxNjY5MzE0OTgwLjg2NjMyLCJuYmYiOjE2NjkzMTQ5ODAuODY2MzIyLCJleHAiOjE3MDA4NTA5ODAuODMwNTg2LCJzdWIiOiI4ODAzMTk5Iiwic2NvcGVzIjpbInNob3BzLm1hbmFnZSIsInNob3BzLnJlYWQiLCJjYXRhbG9nLnJlYWQiLCJvcmRlcnMucmVhZCIsIm9yZGVycy53cml0ZSIsInByb2R1Y3RzLnJlYWQiLCJwcm9kdWN0cy53cml0ZSIsIndlYmhvb2tzLnJlYWQiLCJ3ZWJob29rcy53cml0ZSIsInVwbG9hZHMucmVhZCIsInVwbG9hZHMud3JpdGUiLCJwcmludF9wcm92aWRlcnMucmVhZCJdfQ.AACGGiP1Fq8Zzus6Th1k3gH7Mb9fgGg1ENSpMXTr3VIQeAl3laAaocKmKrvU8RWzYhPP8RfPs5814FBu5mw'

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.printify.com/v1/shops.json`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer: ${apiToken}`
        }
      })
      const data = res.json()
      console.log(data)
    } 
    fetchData()
  }, [])

  const Element = Scroll.Element;

  return (
    <Element name={name} className='merch-section'>
      <div className='red-transition'>
          <h3 className='home-about-us-title'>MERCH</h3>
          <img src={redTransition} alt='' />
      </div>
      {
        merchItems.map((item) => {
          const sortedImagesArr = item.images.sort((a, b) => Number(b.is_default) - Number(a.is_default))
          return (
            <div key={item.id}>
              <img src={sortedImagesArr[0].src} alt='' className='merch-preview-image'/>
              <div className='merch-preview-info'>
                <h4>{item.title}</h4>
                <h4>${item.variants[0].price}</h4>
              </div>
            </div>
          )
        })
      }
    </Element>
  )
}

export default Merch