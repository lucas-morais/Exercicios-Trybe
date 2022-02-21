const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
  };
  
  // Converte o nome dos campos de snake_case para camelCase
  const serialize = (authorData) => authorData.map((item) => getNewAuthor({
    id: item.id,
    firstName: item.first_name,
    middleName: item.middle_name,
    lastName: item.last_name}));

module.exports