import React from 'react'
import Map from '../../Component/Map/Map'

import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-info-wrapper">
        <div className="contact-title">
          İletişim
        </div>
        <div className="contact-info-list-container">
          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Firma Adı
            </div>
            <div className="contact-info">
              Ercan Halı
            </div>

          </div>


          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Telefon 1
            </div>
            <div className="contact-info-tel">
              05312738670
            </div>

          </div>



          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              E-mail
            </div>
            <div className="contact-info-mail">
              veliturcan@gmail.com
            </div>

          </div>



          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Adres
            </div>
            <div className="contact-info">
              Kayseri falan filan
            </div>

          </div>

          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Şehir
            </div>
            <div className="contact-info">
              Kayseri
            </div>

          </div>



          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi No
            </div>
            <div className="contact-info">
              3274t81324
            </div>

          </div>


          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi Dairesi
            </div>
            <div className="contact-info">
              Beşiktaş
            </div>

          </div>
          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi Dairesi
            </div>
            <div className="contact-info">
              Beşiktaş
            </div>

          </div>


          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi Dairesi
            </div>
            <div className="contact-info">
              Beşiktaş
            </div>

          </div>


          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi Dairesi
            </div>
            <div className="contact-info">
              Beşiktaş
            </div>

          </div>

          <div className="contact-info-list-item">
            <div className="contact-info-list-title">
              Vergi Dairesi
            </div>
            <div className="contact-info">
              Beşiktaş
            </div>

          </div>
        </div>
        <div className="bank-account-item">
          Banka Hesapları
        </div>
      </div>
    <div className="map-container">
      <Map/>
    </div>
    </div>
  )
}

export default Contact
