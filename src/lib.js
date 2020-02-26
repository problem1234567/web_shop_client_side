import Swal from 'sweetalert2';

const host='http://localhost:5000';

function showAlert(title) {

    let timerInterval
    Swal.fire({
        title: title,
        html: 'Type again in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
        }
    });
}

function checkAuth(){
    const route = '/checkAuth';
    return fetch(host+route,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },credentials: 'include'}).then(response => response.json()).then(data => {
        if (data==="OK"){
            return true;    
        } else {
            return false;
        }
    });
}

function Logout(){
    const route = '/logout';
    return fetch(host+route,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },credentials: 'include'}).then(res =>res.json()).then(data => console.log(data));
}

export default showAlert;
export {host,checkAuth,Logout};