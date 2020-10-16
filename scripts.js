$(document).ready(function() {
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        type: 'GET',
        success: function(request) {
            for (let i = 0; i < request.length; i++) {
                let $html = $(`
                <div class="carousel-item carousel-item-content ${i === 0 ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-3 text-center">
                            <img class="rounded-circle" src=${request[i].pic_url} class="d-block w-100" alt="random person image">
                        </div>
                        <div class="col-sm-8 ml-3 d-flex flex-column">
                            <div>&lt;&lt; ${request[i].text} &gt;&gt;</div>
                            <div class="font-weight-bold mt-3">${request[i].name}</div>
                            <div>${request[i].title}</div>
                        </div>
                    </div>
                </div>`);
            }
        }
    })
})
