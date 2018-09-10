fixture `Dynamic Tests`;

const users= [
    'user1',
    'user2'
];

for(let i = 0; i < users.length; i++) {
    const user= users[i];

    test(`Test ${i + 1}: ${user}`, async t => {
        console.log("user: " + user);
    });
}
