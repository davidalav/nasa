import { Fragment } from 'react';
import { Button, Input, Select, InputNumber } from 'antd';
import './style.css'
import { useTranslation } from 'react-i18next';

const NewPlanet = ({t, i18next}) => {
    [t, i18next] = useTranslation()
    const galaxy = ['Milky Way', 'Massier 83', 'Black Eye Galaxy', 'Pinwheel', 'Canis Major Dwarf', 'Somewhere else...'];
    
    return(
        <Fragment>
            <div className='submit'>
                <span>{t('newplanet')}</span>
            </div>
            <div className='inputs'>
                <Input className='input' type='text' placeholder={t("planetName")}></Input>
                <Select 
                        defaultValue={t("galaxyName")}
                        className='select'
                >
                    {galaxy.map((item, index) => <option value={index}>{item}</option>)}
                </Select>
                <InputNumber className='input' placeholder={t("diametr")}></InputNumber>
                <InputNumber className='input' placeholder={t("distance")} ></InputNumber>
                <Input className='input' type='text' placeholder={t("yourName")}></Input>
                <Input className='input' type='text' placeholder={t("email")}></Input>
            </div>
            <Button type='submit' className='button'>SUBMIT</Button>
        </Fragment>
    )
}

export default NewPlanet