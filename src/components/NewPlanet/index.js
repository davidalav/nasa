import { Fragment } from 'react';
import { Button, Input, Select, InputNumber, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css'
import FormItem from 'antd/es/form/FormItem';

const NewPlanet = ({t, i18next}) => {
    [t, i18next] = useTranslation()
    const galaxy = ['Milky Way', 'Massier 83', 'Black Eye Galaxy', 'Pinwheel', 'Canis Major Dwarf', 'Somewhere else...'];
    
    return(
        <Fragment>
            <div className='submit'>
                <span>{t('newplanet')}</span>
            </div>
            <Form className='inputs' >
                <Form.Item 
                    name="planetName"
                    rules={[{ required: true, message: 'Please enter the Planet Name!' }]}>    
                    <Input 
                        className='input' 
                        type='text' 
                        placeholder={t("planetName")}
                    >
                    </Input>
                </Form.Item>
                <Form.Item
                    className='selectInput' 
                    name="galaxyName"
                    rules={[{ required: true, message: 'Please enter the Galaxy Name!' }]}
                >
                    <Select 
                        defaultValue={t("galaxyName")}
                        className='select'
                    >
                        {galaxy.map((item, index) => <option value={index}>{item}</option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="diametr"
                    rules={[{ required: true, message: 'Please enter the Diametr!' }]}>
                    <InputNumber 
                        className='input' 
                        placeholder={t("diametr")}
                    >
                    </InputNumber>
                </Form.Item>
                <Form.Item
                    name="distance"
                    rules={[{ required: true, message: 'Please enter the Distance!' }]}>
                    <InputNumber 
                        className='input' 
                        placeholder={t("newDistance")}
                    >    
                    </InputNumber>
                </Form.Item>
                <Form.Item 
                    name="yourName"
                    rules={[{ required: true, message: 'Please enter Your Name!' }]}>
                    <Input 
                        className='input' 
                        type='text' 
                        placeholder={t("yourName")}
                    >

                    </Input>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter the Email!' }]}>
                    <Input 
                        className='input' 
                        type='text' 
                        placeholder={t("email")}
                    >
                    </Input>
                </Form.Item>
                <Button 
                    htmlType='submit' 
                    type='submit' 
                    className='button'
                >
                SUBMIT
                </Button>
            </Form>
        </Fragment>
    )
}

export default NewPlanet