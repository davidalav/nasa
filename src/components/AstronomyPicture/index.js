import React, { Fragment, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { apiClient } from '../../services/client';
import { useTranslation } from 'react-i18next';
import { Button, DatePicker } from 'antd';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.module.css'
import i18next from 'i18next';
import './style.css';

const AstronomyPicture = ({t, i18next}) => {
  [t, i18next] = useTranslation()
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
        <span>{t("astronomyPicture")}</span>
      </div>
      <div className='date'>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date['$d'])}
        />
        <Button
          type='submit'
          className='dateButton'
          onClick={onClick}
        >
          GO
        </Button>
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