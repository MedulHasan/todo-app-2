const todos = [
    {
        id: 'm1',
        text: 'Create Our First Todo',
    },
    {
        id: 'm2',
        text: 'Create Our Second Todo',
    },
];
const searchText = '';
const a = todos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()));
console.log(a);
