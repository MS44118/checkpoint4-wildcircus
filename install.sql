CREATE DATABASE circus;

USE circus;


CREATE TABLE users (
  id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE events (
  id_event INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date_event DATETIME,
  city_event VARCHAR(255),
  address_event VARCHAR(255),
  capacity INT
);

CREATE TABLE bookings (
  id_booking INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  quantity_booking INT,
  user_id INT,
  event_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id_user),
  FOREIGN KEY (event_id) REFERENCES events(id_event)
);


-- -- mock datas for USERS
INSERT INTO users 
(firstname, lastname, email, phone)
VALUES
('maelenn', 'sallic', 'ms44118@gmail.com', '0677250296'),
('jo', 'sallic', 'jo@gmail.com', '0677250296'),
('fanch', 'sallic', 'fanch@gmail.com', '0677250296')
;

-- -- mock datas for EVENTS
INSERT INTO events 
  (date_event,
  city_event,
  capacity,
  address_event)
VALUES
  ('2019-07-31 14:00', 'Brest', 10, 'sous le grand chapiteau, Parc à chaine'),
  ('2019-07-31 17:00', 'Brest', 10, 'sous le grand chapiteau, Parc à chaine'),
  ('2019-07-31 19:00', 'Brest', 10, 'sous le grand chapiteau, Parc à chaine'),
  ('2019-08-31 14:00', 'Nantes', 10, 'sous le grand chapiteau, Place des Lys'),
  ('2019-08-31 17:00', 'Nantes', 10, 'sous le grand chapiteau, Place des Lys'),
  ('2019-08-31 19:00', 'Nantes', 10, 'sous le grand chapiteau, Place des Lys'),
  ('2019-09-30 14:00', 'Paris', 10, 'sous le grand chapiteau, Place de la petite Hollande'),
  ('2019-09-30 17:00', 'Paris', 10, 'sous le grand chapiteau, Place de la petite Hollande'),
  ('2019-09-30 19:00', 'Paris', 10, 'sous le grand chapiteau, Place de la petite Hollande')
;

-- -- mock datas for BOOKINGS

INSERT INTO bookings 
  (quantity_booking, user_id, event_id)
VALUES
  (2, 1, 3),
  (12, 2, 1),
  (4, 3, 2),
  (2, 1, 6),
  (2, 2, 5),
  (4, 3, 9)
;

-- is the event existing?
SELECT
COUNT(IFNULL(id_event, 0)) AS nb_event
FROM events
WHERE events.id_event = 1
;

SELECT
COUNT(IFNULL(id_event, 0)) AS nb_event
FROM events
WHERE events.id_event = 4
;

-- is there bookings for a specific event?
SELECT
SUM(IFNULL(quantity_booking, 0)) as total_booking
FROM bookings
RIGHT JOIN events ON bookings.event_id=events.id_event
WHERE events.id_event = 1
GROUP BY events.id_event
;

SELECT
SUM(IFNULL(quantity_booking, 0)) as total_booking
FROM bookings
RIGHT JOIN events ON bookings.event_id=events.id_event
WHERE events.id_event = 4
GROUP BY events.id_event
;

-- list of events with the number of places booked
SELECT
events.*,
SUM(IFNULL(bookings.quantity_booking, 0)) as total_booking
FROM bookings
RIGHT JOIN events ON bookings.event_id=events.id_event
WHERE events.date_event >= CURDATE()
GROUP BY events.id_event
ORDER BY events.date_event ASC;
