var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(val) {
    console.log(val);
});

async function getUser() {
    try {
        const blob = await fetch('https://randomuser.me/api/');
        const res = await blob.json();
        console.log(res.results[0].name.first);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

getUser();
