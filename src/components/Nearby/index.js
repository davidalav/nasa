import { Fragment, useState } from 'react';
import { processNerabyResponse } from '../../utils';
import { apiClient } from '../../services/client';
import { Button, DatePicker } from 'antd';
import moment from 'moment/moment';
import 'react-datepicker/dist/react-datepicker.module.css'
import './style.css';
import { useTranslation } from 'react-i18next';

const Nearby = ({t, i18next}) => {
    [t, i18next] = useTranslation()
    const [data, setData] = useState([]);
    const [selectedDateMin, setSelectedDateMin] = useState(null);
    const [selectedDateMax, setSelectedDateMax] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        if (!selectedDateMin || !selectedDateMax) {
            // set error....
            return;
        }

        try {
            setIsLoading(true);

            const startDate = moment(selectedDateMin).format('YYYY-MM-DD');
            const endDate = moment(selectedDateMax).format('YYYY-MM-DD');

            const { data } = await apiClient.get('/neo/rest/v1/feed', {
                start_date: startDate,
                end_date: endDate,
            });

            setData(processNerabyResponse(data));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Fragment>
            <div className='nearby'>
                <span>{t('searchAsteroids')}</span>
            </div>
            <div className='date'>
                <DatePicker type='date' placeholderText='start date'
                    selected={selectedDateMin}
                    onChange={(date) => setSelectedDateMin(date['$d'])}
                />
                <DatePicker placeholderText='end date'
                    selected={selectedDateMax}
                    onChange={(date) => setSelectedDateMax(date['$d'])}
                />
                <Button type='submit' className='dateButton' onClick={onClick}>GO</Button>
            </div>
            {data && <div className='tableDiv mtb-3'>
                <table  className='table'>
                    <thead>
                        <tr>
                            <th>{t("title")}</th>
                            <th>{t("distance")}</th>
                            <th>{t("magnitude")}</th>
                            <th>{t("hazardous")}</th>
                            <th>{t("diameter")}</th>
                        </tr>
                    </thead>
                    {data.map(item => <tbody className='body'><tr>
                        {Object.keys(item).map((elem) => 
                        <td className='tableItem'>{item[elem]}</td>)}</tr>
                        </tbody>)
                    }
                </table>
            </div>}
        </Fragment>
    )
}

export default Nearby