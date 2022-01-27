#1
INSERT INTO sakila.staff (address_id, email, first_name, last_name, store_id, username)
VALUES(5, 'ringo@starr.com', 'Ringo', 'Starr', 2, 'RingoStarr' );

#2
INSERT INTO sakila.staff (address_id, email, first_name, last_name, store_id, username)
VALUES(2, 'billy@shears.com', 'Billy', 'Shears', 1, 'BillyShears' ),
(3, 'george@harrison.com', 'George', 'Harrison', 2, 'GeorgeHarrison');

#3
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
    LIMIT 5;

#4 
INSERT INTO sakila.category(name) VALUES
('Cyberpunk'),
('Kung Fu'),
('Western');


#5
INSERT INTO sakila.store (address_id, manager_staff_id) 
VALUES (3,3); 
