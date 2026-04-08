//esse é o modelo

const createTask = (id, title) =>{
    return {
        id,
        title,
        completed: false
    };
};

module.exports = { createTask };