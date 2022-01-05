import React from 'react'
import { GALLERY_DATA } from '../../data'
import GalleryItem from './GalleryItem'
import Style from  './Gallery.module.css'
export default function Galleries() {
  const galleryData = GALLERY_DATA.map(data =>
    <GalleryItem
      key={data.img}
      linkImg={data.linkImg}
      img={data.img}
    />
  )
  return (
    <section id="gallery" className={Style.gallery}>
      <div className="container">

        <div className="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
            quidem hic quas.</p>
        </div>
        <div className="row no-gutters">
          {galleryData}
        </div>
      </div>
    </section>
  )
}
