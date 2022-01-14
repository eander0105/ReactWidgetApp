import React from 'react'

function WidgetMenu(props) {

    const menuItems = [
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }],
        [{
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        },
        {
            IconCode: 'weatherIcon',
            WidgetCode: 'weatherWidget'
        }]
    ]
    const loadIcon = (iconCode = 'standard') => {
        return require(`./assets/${iconCode}.png`);
    }

    return (
        <div className='WidgetMenu'>
            {menuItems.map((items) => {
                return(
                    <div className='WidgetRow'>
                    
                    {items.map((item) => {
                        return(
                            <div className='WidgetItem' onClick={() => props.widgetOnClick({widgetCode: item.WidgetCode, posY: 100, posX: 100})}>
                                <img className='WidgetIcon' src={loadIcon(item.IconCode).default} alt={item.IconCode} />
                            </div>
                        )
                    })}
                    </div>
                )
            })}
        </div>
    )
}

export default WidgetMenu
