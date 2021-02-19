const m = require("mithril")

const Modal = {

view: ()=> (
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Success!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">

        <div class="present" ontouchstart="ontouchstart">
            <div class="santa">
            <div class="santa__hat"></div>
            <div class="santa__eyes"></div>
            <div class="santa__beard">
                <div class="santa__beard--cover"></div>
            </div>
            <div class="santa__smile"></div>
            </div>
            <div class="present__box">
            <div class="present__ribbon--vertical"></div>
            <div class="present__ribbon--horizontal"></div>
            </div>
            <div class="present__top">
            <div class="present__ribbon--vertical"></div>
            <div class="present__bow"></div>
            </div>
        </div> 
        <p>Person added! Go Check Santas List.</p>
                </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
    </div>
)}


export default Modal