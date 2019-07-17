import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Select, message, Row, Col,
} from 'antd';
import conf from '../../app.conf';

// CSS
import './Booking.css';

// ACTIONS
import { displayNeweventFormAction, displayKnowneventFormAction } from '../../Actions/displayeventFormAction';
import { updateeventAction, neweventAction } from '../../Actions/eventAction';

function Booking({ eventSelected, dispatch }) {
  const { Option } = Select;
  const [id, setId] = useState('');
  const [event, setEvent] = useState({});
  const [address, setAdress] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [labelActive, setLabelActive] = useState('');

  useEffect(() => {
    if (eventSelected.event) {
      setId(eventSelected.event.id);
      setAdress(eventSelected.event.address);
      setDate(eventSelected.event.date !== 'Invalid date' ? eventSelected.event.date : '');
      setCity(eventSelected.event.city);
      setCapacity(eventSelected.event.capacity);
      setLabelActive('active');
    }
  }, [eventSelected]);

  useEffect(() => {
    const eventTemp = {
      id,
      address,
      date,
      city,
      capacity,
    };
    setEvent(eventTemp);
  }, [id, address, date, city, capacity,]);

  const handleSend = () => {
    if (eventSelected === 'new') {
      dispatch(displayNeweventFormAction('none'));
    } else {
      dispatch(displayKnowneventFormAction('none'));
    }
    if (id) {
      dispatch(updateeventAction(event));
      axios.put(`${conf.url}/api/event/${id}`, event)
        .then((res) => {
          if (res.status === 200) {
            dispatch(updateeventAction(event));
            message.success('La modification a bien été prise en compte', 3);
          }
        })
        .catch(() => {
          message.error("Une erreur s'est produite. Merci de réessayer", 3);
        });
    } else {
      axios.post(`${conf.url}/api/event/`, event)
        .then((data) => {
          if (data) {
            const eventTemp = { ...event, id: data.data[0].id };
            dispatch(neweventAction(eventTemp));
            message.success("L'enregistrement a bien été pris en compte", 3);
          }
        })
        .catch(() => {
          message.error("Une erreur s'est produite. Merci de réessayer", 3);
        });
    }
    setId('');
    setAdress('');
    setDate('');
    setCity('');
    setCapacity('');
  };

  const handleClose = () => {
    if (eventSelected === 'new') {
      dispatch(displayNeweventFormAction('none'));
    } else {
      dispatch(displayKnowneventFormAction('none'));
    }
  };

  return (
    <div className="container form">
      <Row>
        <Col sm={24} md={8} className="input-field select">
          <span className="spanForm">Genre :</span>
          <Select value={gender !== null ? gender : ''} onChange={value => setGender(value)} className="selectForm" style={{ width: 200 }}>
            <Option value="female">Feminin</Option>
            <Option value="male">Masculin</Option>
          </Select>
        </Col>
        <Col sm={24} md={8} className="input-field">
          <span className="spanForm">Date d&apos;adhésion :</span>
          <i className="material-icons">calendar_today</i>
          <DatePicker
            locale="fr"
            dateFormat="dd/MM/yyyy"
            selected={membershipDateLast && new Date(membershipDateLast)}
            onChange={date => date && setMembershipDateLast(date)}
          />
        </Col>
        <Col sm={24} md={8} className="input-field">
          <span className="spanForm">Date de naissance :</span>
          <i className="material-icons">calendar_today</i>
          <DatePicker
            locale="fr"
            dateFormat="dd/MM/yyyy"
            selected={date && new Date(date)}
            onChange={date => date && setDate(date)}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="last_name"
            value={lastname !== null ? lastname : ''}
            onChange={event => setLastname(event.target.value)}
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="last_name">
            Nom
          </label>
        </Col>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="first_name"
            value={firstname !== null ? firstname : ''}
            onChange={event => setFirstname(event.target.value)}
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="first_name">
            Prénom
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">capacity</i>
          <input
            value={capacity !== null ? capacity : ''}
            onChange={event => setCapacity(event.target.value)}
            id="capacity"
            type="capacity"
            className="validate"
          />
          <label className={labelActive} htmlFor="capacity">
            capacity
          </label>
        </Col>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">phone</i>
          <input
            value={phone !== null ? phone : ''}
            onChange={event => setPhone(event.target.value)}
            id="icon_telephone"
            type="tel"
            className="validate"
          />
          <label className={labelActive} htmlFor="icon_telephone">
            Téléphone
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">location_on</i>
          <input
            value={address !== null ? address : ''}
            onChange={event => setAdress(event.target.value)}
            id="address"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="address">
            Adresse
          </label>
        </Col>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">location_on</i>
          <input
            value={zip !== null ? zip : ''}
            onChange={event => setZip(event.target.value)}
            id="zip_code"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="zip_code">
            Code postal
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">location_on</i>
          <input
            value={city && city}
            onChange={event => setCity(event.target.value)}
            id="city"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="city">
            Ville
          </label>
        </Col>
        <Col sm={24} md={12} className="input-field">
          <label>
            <input
              type="checkbox"
              id="check_neighborhood"
              checked={neighborhood ? 'checked' : ''}
              onChange={event => setNeighborhood(event.target.checked)}
            />
            <span>Habite dans le quartier</span>
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} className="input-field">
          <i className="material-icons prefix">person_add</i>
          <input
            value={memberId && memberId}
            onChange={event => setMemberId(event.target.value)}
            id="member_id"
            type="text"
            className="validate"
          />
          <label className={labelActive} htmlFor="member_id">
            Numéro d&apos;adhérent
          </label>
        </Col>
        <Col sm={24} md={12} className="input-field">
          <label>
            <input
              type="checkbox"
              id="check_member_active"
              checked={memberActive ? 'checked' : ''}
              onChange={event => setMemberActive(event.target.checked)}
            />
            <span>Membre actif</span>
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={6} className="input-field">
          <label>
            <input
              type="checkbox"
              id="check_image_copyright"
              checked={imageCopyright ? 'checked' : ''}
              onChange={event => setImageCopyright(event.target.checked)}
            />
            <span>Droit à l&apos;image</span>
          </label>
        </Col>
        <Col sm={24} md={6} className="input-field">
          <label>
            <input
              type="checkbox"
              id="check_mailing_active"
              checked={mailingActive ? 'checked' : ''}
              onChange={event => setMailingActive(event.target.checked)}
            />
            <span>Accepte l&apos;envoie de mail</span>
          </label>
        </Col>
        <Col sm={24} md={6} className="input-field">
          <button
            type="button"
            className="waves-effect waves-light btn-small teal darken-1 white-text right col s4"
            onClick={handleSend}
          >
            Envoyer
          </button>
        </Col>
        <Col sm={24} md={6} className="input-field">
          <button
            type="button"
            className="waves-effect waves-light btn-small teal darken-1 white-text right col s4"
            onClick={handleClose}
          >
            Fermer
          </button>
        </Col>
      </Row>
    </div>
  );
}

Booking.propTypes = {
  eventSelected: PropTypes.shape({
    address: PropTypes.string,
    date: PropTypes.string,
    city: PropTypes.string,
    capacity: PropTypes.string,
    firstname: PropTypes.string,
    gender: PropTypes.string,
    imageCopyright: PropTypes.bool,
    lastname: PropTypes.string,
    mailingActive: PropTypes.bool,
    memberActive: PropTypes.bool,
    memberId: PropTypes.string,
    membershipDateLast: PropTypes.string,
    membershipPlace: PropTypes.string,
    neighborhood: PropTypes.bool,
    phone: PropTypes.string,
    zip: PropTypes.string,
  }),
  dispatch: PropTypes.func,
};

Booking.defaultProps = {
  eventSelected: null,
  dispatch: null,
};

export default connect()(Booking);
