SELECT DATEDIFF('2020-01-31', '2020-01-01');
SELECT DATEDIFF('2020-01-01', '2020-01-31');
SELECT TIMEDIFF('08:30:10', '09:30:10');
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');
#################################################################

#1 
SELECT DATEDIFF('2030-01-20',CURRENT_DATE());

#2
SELECT TIMEDIFF('11:00:00', '10:25:45');

