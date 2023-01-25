const axios = require("axios")
const getUsers =  async ()=> {
    try {
        const users = await axios.get(
            `https://api.github.com/search/users?q=location:togo`
        );return users.data.items
            .map((user) =>{
                return{
                    name:user.login,
                    url:user.url,
                };
            })
    }catch (error){
        return[error];

    }
};
module.exports = {getUsers:getUsers}
