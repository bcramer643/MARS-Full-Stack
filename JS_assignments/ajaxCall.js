/* function getData() {
    $.ajax({
        url: 'https://gorest.co.in/public/v2/users',
        datatype: 'json',
        type: 'GET',
        data: {
            key: 'value',
        },
        success: data =>{
            console.log(data)
        },
        error: err =>{
            console.log(err)
        },
    })
} */

fetch('https://gorest.co.in/public/v2/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            const markup = `<li>${user.id},
                                ${user.name},
                                ${user.email},
                                ${user.gender},
                                ${user.status}
                                        </li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        })
    })
    .catch(error => console.log(error));