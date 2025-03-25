console.log('%cUSERS.js', 'color:black; background-color:rgb(64,64,255); padding:0 150px 0 150px')

const users = [
    { firstName: "Alice", lastName: "Johnson", points: 120 },
    { firstName: "Bob", lastName: "Smith", points: 99 },
    { firstName: "Charlie", lastName: "Brown", points: 180 }
];

const members = users.map(function (user) {
    const member = {
        fullName: `${user.firstName} ${user.lastName}`,
        membershipStatus: user.points > 100 ? `Premium` : `Standard`
    }
    return member;
});
console.log(members);