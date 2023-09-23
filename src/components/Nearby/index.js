import { Fragment, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment/moment';
import 'react-datepicker/dist/react-datepicker.module.css'
import './style.css';
import { apiClient } from '../../services/client';
import { processNerabyResponse } from '../../utils';
const Nearby = () => {
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
// console.log(data)
    return (
        <Fragment>
            <div className='nearby'>
                <span>Search for Asteroids based on their closest approach date to Earth</span>
            </div>
            <div className='date'>
                <ReactDatePicker placeholderText='start date'
                    className='dateInput'
                    selected={selectedDateMin}
                    onChange={(date) => setSelectedDateMin(date)}
                    dateFormat="dd/MM/yyyy"
                />
                <ReactDatePicker placeholderText='end date'
                    className='dateInput'
                    selected={selectedDateMax}
                    onChange={(date) => setSelectedDateMax(date)}
                    dateFormat="dd/MM/yyyy"
                />
                <button className='dateButton' onClick={onClick}>GO</button>
            </div>
            {data && <div className='tableDiv mtb-3'>
                <table  className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Distance (km)</th>
                            <th>Absolute Magnitude</th>
                            <th>Is potentially hazardous</th>
                            <th>Diameter (meters)</th>
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