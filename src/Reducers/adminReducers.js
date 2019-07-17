
const adminReducer = (store = [], action) => {
  switch (action.type) {
    case 'INIT_EVENTS': {
      return action.payload;
    }
    case 'CREATE_EVENT': {
      // console.log(action.payload)
      return [...store, action.payload];
    }    
    case 'REMOVE_EVENT': {
      const id = action.payload;
      const index = store.findIndex(i => i.id_event === id);
      return [
        ...store.slice(0, [index]),
        ...store.slice([index + 1], store.length),
      ];
    }
    // case 'UPDATE_EVENT': {
    //   const idRegToDelete = action.payload.regId;
    //   const registrations = action.payload.reg;
    //   const indexRegToDelete = registrations.findIndex(i => i.id_registration === idRegToDelete);
    //   const registration = action.payload.reg[indexRegToDelete];

    //   const idEventToUpdate = action.payload.reg[indexRegToDelete].event_id;
    //   const indexEventToUpdate = store.findIndex(i => i.id_event === idEventToUpdate);
    //   const event = store[indexEventToUpdate];

    //   const eventModified = {
    //     NB_REG: event.NB_REG - 1,
    //     id_event: event.id_event,
    //     name_event: event.name_event,
    //     date_b: event.date_b,
    //     date_e: event.date_e,
    //     nb_adults: event.nb_adults - registration.quantity_adult,
    //     nb_children: event.nb_children - registration.quantity_children,
    //     nb_persons:
    //       event.nb_persons - (registration.quantity_adult + registration.quantity_children / 2),
    //     capacity: event.capacity,
    //     nb_emails: event.nb_emails - registration.nb_emails,
    //     nb_allergies: event.nb_allergies - registration.nb_allergies,
    //     nb_comments: event.nb_comments - registration.nb_comments,
    //   };
    //   return [
    //     ...store.slice(0, [indexEventToUpdate]),
    //     eventModified,
    //     ...store.slice([indexEventToUpdate + 1], store.length),
    //   ];
    // }

    default:
      return store;
  }
};

export default adminReducer;
