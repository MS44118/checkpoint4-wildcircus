import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Select, message, Row, Col, TimePicker,  DatePicker, Radio
} from 'antd';
import conf from '../../app.conf';
import moment from 'moment';
// CSS
import './EventManager.css';

// ACTIONS
// import { displayNeweventFormAction, displayKnowneventFormAction } from '../../Actions/displayeventFormAction';
// import { updateeventAction, neweventAction } from '../../Actions/eventAction';

function EventManager({ idEvent, eventSelected, dispatch }) {
  const { Option } = Select;
  const [id, setId] = useState(idEvent);
  const [event, setEvent] = useState({});
  const [address, setAdress] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [labelActive, setLabelActive] = useState('');

  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  // const { size } = this.state;
  const [size, setSize] = useState()
  
  // useEffect = e => {
  //   setSize({ size: e.target.value });
  // };

  const format = 'HH:mm';
  // useEffect(() => {
  //   if (eventSelected.event) {
  //     setId(eventSelected.event.id);
  //     setAdress(eventSelected.event.address);
  //     setDate(eventSelected.event.date !== 'Invalid date' ? eventSelected.event.date : '');
  //     setCity(eventSelected.event.city);
  //     setCapacity(eventSelected.event.capacity);
  //     setLabelActive('active');
  //   }
  // }, [eventSelected]);

  useEffect(() => {
    const eventTemp = {
      id,
      address,
      date,
      city,
      capacity,
    };
    setEvent(eventTemp);
    console.log(eventTemp);
    // dispatch(eventSelected({eventTemp}))
  }, [id, address, date, city, capacity,]);

  
  // const handleSend = () => {
  //   if (eventSelected === 'new') {
  //     dispatch(displayNeweventFormAction('none'));
  //   } else {
  //     dispatch(displayKnowneventFormAction('none'));
  //   }
  //   if (id) {
  //     dispatch(updateeventAction(event));
  //     axios.put(`${conf.url}/api/event/${id}`, event)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           dispatch(updateeventAction(event));
  //           message.success('La modification a bien été prise en compte', 3);
  //         }
  //       })
  //       .catch(() => {
  //         message.error("Une erreur s'est produite. Merci de réessayer", 3);
  //       });
  //   } else {
  //     axios.post(`${conf.url}/api/event/`, event)
  //       .then((data) => {
  //         if (data) {
  //           const eventTemp = { ...event, id: data.data[0].id };
  //           dispatch(neweventAction(eventTemp));
  //           message.success("L'enregistrement a bien été pris en compte", 3);
  //         }
  //       })
  //       .catch(() => {
  //         message.error("Une erreur s'est produite. Merci de réessayer", 3);
  //       });
  //   }
  //   setId('');
  //   setAdress('');
  //   setDate('');
  //   setCity('');
  //   setCapacity('');
  // };


  return (
    <div className="container form-event">
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix"></i>
          <input
            value={id !== null ? id : ''}
            onChange={e => setCapacity(e.target.value)}
            id="id"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="capacity">
            n° évènement
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field pickers">
          <DatePicker size="default" />
        </Col>
        <Col>
          <TimePicker defaultValue={moment('14:00', format)} format={format} />
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">people</i>
          <input
            value={capacity !== null ? capacity : ''}
            onChange={e => setCapacity(e.target.value)}
            id="capacity"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="capacity">
            capacity
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">location_on</i>
          <input
            value={address !== null ? address : ''}
            onChange={e => setAdress(e.target.value)}
            id="address"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="address">
            Adresse
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">location_on</i>
          <input
            value={city && city}
            onChange={e => setCity(e.target.value)}
            id="city"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="city">
            Ville
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={6} className="input-field">
          <button
            type="button"
            className="waves-effect waves-light btn-small teal darken-1 white-text right col s4"
            // onClick={handleSend}
          >
            Envoyer
          </button>
        </Col>
      </Row>
    </div>
  );
}

EventManager
.propTypes = {
  eventSelected: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string,
    city: PropTypes.string,
    capacity: PropTypes.string,
  }),
  dispatch: PropTypes.func,
};

EventManager
.defaultProps = {
  eventSelected: null,
  dispatch: null,
};

export default connect()(EventManager
  );
