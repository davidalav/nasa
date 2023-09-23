import React, { Fragment, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import i18next from 'i18next';
import 'react-datepicker/dist/react-datepicker.module.css'
import { apiClient } from '../../services/client';
import './style.css';
import { useTranslation } from 'react-i18next';

const AstronomyPicture = () => {
  const {t} = useTranslation()
  const [data, setData] = useState([])
  const [selectedDate, setSelectedDate] = useState(null);

  const onClick = async () => {
    try {
      if (!selectedDate) {
        /// set error...
        return;
      }

      const { data } = await apiClient.get('/planetary/apod', {
        date: moment(selectedDate).format('YYYY-MM-DD'),
      });

      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Fragment>
      <div className="astronomy" >
        <span>{t('Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.')}</span>
      </div>
      <div className='date'>
        <ReactDatePicker
          placeholderText='to the present time'
          className='dateInput'
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
        />
        <button
          className='dateButton'
          onClick={onClick}
        >
          GO
        </button>
      </div>
      <div className='resp'>
        <span className='respText'>{data.explanation}</span>
        <br/>
        <img src={data.url} className='respImg'></img>
      </div>
    </Fragment>
  )
}

export default AstronomyPicture